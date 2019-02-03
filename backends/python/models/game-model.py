import os
from flask_sqlalchemy import SQLAlchemy


class Game():

    def __init__(self, game):
        self.user = game.user
        self.inventory = game.inventory
        self.location = game.location
        self.experience_points = game.experience_points

    def save_game(self):

        result = False

        db = SQLAlchemy()
        # class OAuth(db.Model, OAuthConsumerMixin):
        #    pass

        # twitter_bp.backend = SQLAlchemyBackend(OAuth, db.session)    

        POSTGRES_URL = os.getenv("POSTGRES_URL")

        my_heroku_connection=POSTGRES_URL
        engine = db.create_engine(my_heroku_connection)
        engine.connect()
        metadata = db.MetaData()
        games = db.Table('games', metadata, autoload=True, autoload_with=engine)

        return result

    def load_game(self):

        result = False

        db = SQLAlchemy()
        # class OAuth(db.Model, OAuthConsumerMixin):
        #    pass

        # twitter_bp.backend = SQLAlchemyBackend(OAuth, db.session)    

        POSTGRES_URL = os.getenv("POSTGRES_URL")

        my_heroku_connection=POSTGRES_URL
        engine = db.create_engine(my_heroku_connection)
        engine.connect()
        metadata = db.MetaData()
        games = db.Table('games', metadata, autoload=True, autoload_with=engine)

        return result    

