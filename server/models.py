from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request
from sqlalchemy.orm import validates, relationships
from datetime import datetime
from sqlalchemy.ext.associationproxy import association_proxy
db = SQLAlchemy()


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    password_hash = db.Column(db.String)
    email = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String, nullable=False)
    tickets = db.relationship('Ticket', cascade="all, delete-orphan", backref='user')
    event = association_proxy('tickets', 'event')
    def __repr__(self):
        return f'<User username={self.username} email={self.email} address={self.address}>'
    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'address': self.address
        }
    @validates('age')
    def validate_age(self, key, age):
        if age <18:
            raise ValueError('Must be 18 or older to register')
        return age
    @validates('email')
    def validate_email(self, key, email):
        if '@' not in email:
            raise ValueError('Invalid email address')
        elif User.query.filter(User.email == email).first():
            raise ValueError('Email already taken')
        else:
            return email
    @validates('address')
    def validate_address(self, key, address):
        if len(address) < 10:
            raise ValueError('Invalid address')
        return address
    @validates('username')
    def validate_username(self, key, username):
        duplicate_user = User.query.filter(User.username == username).first()
        if duplicate_user:
            raise ValueError('Username already taken')
        else:
            return username
class Ticket(db.Model):
    __tablename__ = 'tickets'
    id = db.Column(db.Integer, primary_key=True)
    # name = db.Column(db.String, nullable=False)
    # location = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'), nullable=False)
    def __repr__(self):
        return f'<Ticket {self.user_id} {self.event_id}'
    def to_dict(self):
        return {
            'id': self.id,
            "event_id": self.event_id,
           
        }
class Events(db.Model):
    __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique= True, nullable=False)
    date = db.Column(db.DateTime, nullable=True)
    time = db.Column(db.DateTime, nullable=True)
    address = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    image = db.Column(db.String)
    ticket = db.relationship('Ticket', cascade="all, delete-orphan", backref='event')
    user = association_proxy('tickets', 'user')
    def __repr__(self):
        return f'<Events {self.name} {self.date} {self.time} {self.address} {self.description}>'
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'date': self.date,
            'time': self.time,
            'address': self.address,
            'description': self.description,
            'image': self.image
        }
    @validates('address')
    def validate_address(self, key, address):
        if len(address) < 5:
            raise ValueError('Invalid address')
        else:
            return address
    # @validates('date')
    # def validate_date(self, key, date):
    #     if date < datetime.now() or date == "":
    #         raise ValueError('Invalid date')
    #     else:
    #         return date
    @validates('description')
    def validate_description(self, key, description):
        if description == "":
            raise ValueError('Description cannot be blank')
        else:
            return description









