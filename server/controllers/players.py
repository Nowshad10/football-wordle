from flask import Flask
from models import Player

def index(req):
    fetch_all = Player.Player.get_all()
    return fetch_all, 200

def random(req):
    fetch_player = Player.Player.get_random()
    return fetch_player, 200
