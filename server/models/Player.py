import sqlite3
import random

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

class Player:
    def __init__(self, id, name):
        self.id = id,
        self.name = name
    
    @staticmethod
    def get_all():
        data = []
        conn = get_db_connection()
        players = conn.execute('SELECT * FROM players').fetchall()
        for p in players:
            playerData = {
                "id": p["id"],
                "name": p["name"]
            }
            data.append(playerData)
        conn.close()
        return data
    
    @staticmethod
    def get_random():
        random_id = random.randint(1, 61)
        data = []
        conn = get_db_connection()
        player = conn.execute('SELECT * FROM players WHERE id = ?', (random_id,)).fetchall()
        playerData = {
            "id": player[0]["id"],
            "name": player[0]["name"]
        }
        data.append(playerData)
        conn.close()
        return data
