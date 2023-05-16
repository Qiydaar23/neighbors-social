#!/usr/bin/env python3
from app import app, bcrypt
from models import db, User, Events, Ticket, datetime
# from flask_bcrypt import Bcrypt

# if __name__ == '__main__':
with app.app_context():
    print("Clearing db...")
    User.query.delete()
    Events.query.delete()
    Ticket.query.delete()
    print("Adding users...")
    users = [
    User(username='LeeC', password_hash=bcrypt.generate_password_hash('password'), email='jimminywiddit@aol.com', age=25, address='1234 Main St, Anytown, USA, 11786'),
    User(username='Qasir', password_hash=bcrypt.generate_password_hash('password'), email= 'charlesboner@gmail.com', age=31, address= '306 Cooper Street, Brooklyn, NY, 11233'),
    User(username= 'coolguy92', password_hash=bcrypt.generate_password_hash('password'), email='whatevermyguy@fuckyou.com', age=18, address='404 Nunya Bidniss Lane, Leaveme Aloon, Nowhere, 11233')
    ]
    db.session.add_all(users)
    db.session.commit()
    print('Seeding Events...')
    date_for_events = '06/14/2024'
    date_1 = datetime.strptime(date_for_events, "%m/%d/%Y")
    date_for_events2 = '07/15/2023'
    date_2 = datetime.strptime(date_for_events2, "%m/%d/%Y")
    date_for_events3 = '08/15/2023'
    date_3 = datetime.strptime(date_for_events3, "%m/%d/%Y")
    date_for_events4 = '09/15/2023'
    date_4 = datetime.strptime(date_for_events4, "%m/%d/%Y")
    date_for_events5 = '09/20/2023'
    date_5 = datetime.strptime(date_for_events5, "%m/%d/%Y")
    time_event1 = '7:00:00'
    time_1 = datetime.strptime(time_event1, "%H:%M:%S")
    time_event2 = '7:15:00'
    time_2 = datetime.strptime(time_event2, "%H:%M:%S")
    time_event3 = '8:15:00'
    time_3 = datetime.strptime(time_event3, "%H:%M:%S")
    time_event4 = '4:15:00'
    time_4 = datetime.strptime(time_event4, "%H:%M:%S")
    time_event5 = '5:15:00'
    time_5 = datetime.strptime(time_event5, "%H:%M:%S")
    events = [
        Events(name='Little shop of Horror', date=date_1, description='Meet the mean plant horror', address='705 Van Buren Street, Brooklyn, NY,11231', time=time_1, image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAcZwAUb8OIW69EItOqPe0pOm5yvvrj8bBQ&usqp=CAU"),
        Events(name='Dog Derby', date=date_2, description='Come gamble your paycheck away as we race the neighborhood dogs', address='805 Greene Avenue, Brooklyn, NY,11211', time=time_2, image = "https://images.squarespace-cdn.com/content/v1/605e08eab21b8a5223e3c324/1627674842694-JFPFWWIS0A8W842JPPUT/Doxy+Derby+Flyer.png?format=1000w"),
        Events(name='Community Cookout', date=date_3, description='all you can eat bring a snack', address='1000 Gates Avenue, Brooklyn, NY,11221', time=time_3, image = "https://www.traditionsatbeaumont.com/wp-content/uploads/2018/08/B-JULY_CommunityCookout-Flyer-805x1024.jpg"),
        Events(name='Townhall meeting', date=date_4, description='I feel like this is self-explanatory', address='1000 Nostrand Avenue, Brooklyn, NY,11221', time=time_4, image = "https://images.template.net/25044/Town-Hall-Meeting-Flyer-Template-Download.jpg"),
        Events(name='Gucci mane Concert', date=date_5, description='Bumping Gucci Mane Classics', address='534 Kosciuszko Street, Brooklyn, NY,11221', time=time_5, image = "data:image/jpeg;base64,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")
    ]
    db.session.add_all(events)
    db.session.commit()
    print("Seeding Tickets...")
    tickets = [
        Ticket(name='Little shop of Horror tix', location='705 Van Buren Street, Brooklyn, NY,11231', user_id=1, event_id=1),
        Ticket(name='Dog Derby tix', location='1000 Nostrand Avenue, Brooklyn, NY,11221', user_id=3, event_id=4),
        Ticket(name='Community Cookout tix', location='1000 Gates Avenue, Brooklyn, NY,11221', user_id=2, event_id=3),
        Ticket(name='Townhall meeting tix', location='534 Kosciuszko Street, Brooklyn, NY,11221', user_id=3, event_id=5),
        Ticket(name='Little shop of Horror tix', location='705 Van Buren Street, Brooklyn, NY,11231', user_id=3, event_id=1),
        Ticket(name='Little shop of Horror tix', location='705 Van Buren Street, Brooklyn, NY,11231', user_id=2, event_id=1),
    ]
    db.session.add_all(tickets)
    db.session.commit()
    print('Seeding Complete!')
        # Seed code goes here!







