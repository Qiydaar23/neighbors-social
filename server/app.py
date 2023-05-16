#!/usr/bin/env python3
from flask import Flask, request, session
from flask_migrate import Migrate
from models import User, Ticket, Events, db,datetime
from flask_bcrypt import Bcrypt
class TicketInfo:
    def __init__(self, ticket, event):
       self.ticket = ticket
       self.event =event

    def to_dict(self):
        return {
            'ticket': self.ticket.to_dict(),
            "event": self.event.to_dict()
           
        }    

# from flask_restful import Resource
app = Flask(__name__)
app.secret_key = b'Y\xf1Xz\x00\xad|eQ\x80t \xca\x1a\x10K'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
migrate = Migrate(app, db)
db.init_app(app)
bcrypt = Bcrypt(app)
# AUTHORIZE FUNCTION
def authorize():
    user_id = session["user_id"]
    current_user = User.query.get(user_id)
    if not current_user:
        return {'error': 'Not logged in'}, 401
# USER ROUTES
@app.post('/users')
def register_user():
    data = request.json
    pw_hash = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(username=data['username'], password_hash=pw_hash, email=data['email'], age=int(data['age']), address=data['address'])
    db.session.add(new_user)
    db.session.commit()
    session['user_id'] = new_user.id
    return new_user.to_dict(), 200
@app.get('/users')
def get_users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}, 200
@app.post('/login')
def login():
    data = request.json
    user = User.query.where(User.username == data['username']).first()
    if user and bcrypt.check_password_hash(user.password_hash, data['password']):
        session['user_id'] = user.id
        return user.to_dict(), 200
    else:
        return {'error': 'Invalid credentials'}, 401
@app.delete('/logout')
def logout():
    session.pop('user_id')
    return {'message': 'Successfully logged out'}, 200
# EVENTS ROUTES
@app.get('/events')
def get_events():
    # authorize()
    events = Events.query.all()
    return {'events': [event.to_dict() for event in events]}, 200
@app.get('/events/<int:id>')
def get_event(id):
    # authorize()
    event = Events.query.get(id)
    return event.to_dict(), 200
@app.post('/events')
def create_event():
    # authorize()
    print("here")
    data = request.json
    print(data)
    date_for_events = '06/14/2024'
    date_1 = datetime.strptime(date_for_events, "%m/%d/%Y"),
    new_event = Events(name=data['name'], address=data['address'], description=data['description'], image=data['image'])
    print(new_event)
    db.session.add(new_event)
    db.session.commit()
    return new_event.to_dict(), 200
    # return {"A":"B"}, 200
@app.patch('/events/<int:id>')
def update_event(id):
    # authorize()
    data = request.json
    event = Events.query.where(Events.id == id).update(data)
    db.session.commit()
    event = Events.query.get(id)
    return event.to_dict(), 200
@app.delete('/events/<int:id>')
def delete_event(id):
    # authorize()
    event = Events.query.get(id)
    db.session.delete(event)
    db.session.commit()
    return {'message': 'Successfully deleted event'}, 200
@app.post('/tickets')
def buy_ticket():
    data = request.json
    new_ticket = Ticket(event_id = data['event_id'],user_id = session['user_id'])
    db.session.add(new_ticket)
    db.session.commit()
    return new_ticket.to_dict(), 200
@app.get('/tickets')
def get_tickets():
    # authorize()
    tickets = Ticket.query.all()
    event_info = []
    for ticket in tickets: 
        event = Events.query.get(ticket.event_id)
        event_info.append({"ticket": ticket.to_dict(),"event":event.to_dict()})
    return {'tickets':event_info}, 200

if __name__ == '__main__':
    app.run(port=5555, debug=True)







