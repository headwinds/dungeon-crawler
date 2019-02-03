import os
import requests
from flask import send_file
from flask_restful import Resource
from flask import Response
from bs4 import BeautifulSoup

# note see api 

class CabinQuestEndPoint(Resource):
    """
    Endpoint for the index which simply gets the index page
    """
    def get(self):
        print("cabinquest")
        url = "https://cabinquest.now.sh/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=http:%2F%2Fcabinporn.com%2Frss"
        nautilis="https://cabinquest.now.sh/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=http:%2F%2Fnautil.us%2Frss%2Fall"
        response = requests.get(nautilis)
        json = response.json()

        # branches = r.content.branches
        print("cabinquest json: ", response.headers['content-type'])

        count = len(json["branches"])
        print("cabinquest json {0}".format(count))

        def get_txt():
            titles = []
            descriptions = []
            for branch in json["branches"]:
                title = branch["title"]
                titles.append(title)

                description = BeautifulSoup(branch["description"]).find('p').getText()
                descriptions.append(description)
            return {"titles":titles, "descriptions":descriptions}

        txt = get_txt()

        dino = txt["descriptions"][5]    

        for title in txt["titles"]:
            print(title)

        content = {"titles":txt["titles"], "descriptions":txt["descriptions"], "branches":json["branches"]}

        return content

        # this returns a string with just the keys?!
        #return Response(
        #    content,
        #    status=response.status_code,
        #    content_type=response.headers['content-type'],
        #)