import os
import requests
from dotenv import load_dotenv
from flask import send_file, Response, request
from flask_restful import Resource
from libraries.responds import respond
from flask_sqlalchemy import SQLAlchemy
from flask_dance.consumer.backend.sqla import OAuthConsumerMixin, SQLAlchemyBackend


def connect():
    db = SQLAlchemy()
    # class OAuth(db.Model, OAuthConsumerMixin):
    #    pass

    # twitter_bp.backend = SQLAlchemyBackend(OAuth, db.session)    

    POSTGRES_URL = os.getenv("POSTGRES_URL")

    my_heroku_connection=POSTGRES_URL
    engine = db.create_engine(my_heroku_connection)
    connection = engine.connect()
    metadata = db.MetaData()
    social = db.Table('social', metadata, autoload=True, autoload_with=engine)
    print("app.py - connected to heroku column names: ", social.columns.keys())

class SaveEndPoint(Resource):
    """
    Endpoint for saving the charater's inventory and location 
    """

    def post(self, data):
        try:
            # client.train()
            print("SaveEndPoint data: ", )
        except Exception:
            return respond(
                400,
                message=(
                    "Sorry, we were unable to save {}.".format(data.id)
                )
            )

        return respond(
            200,
            message=("{} was save.".format(data.id))
        )

class LoadEndPoint(Resource):
    """
    Endpoint for loading the charater's inventory and location 
    """
    def post(self):
        username = request.args.get("username")

        saved_game = {}

        try:
            connect()
            print("loading game")
        except Exception:
            return respond(
                400,
                message=(
                    "Sorry, we were unable to load the game of {}.".format(username)
                )
            )
        return respond(
            200,
            saved_game=saved_game
        )   

