from multiprocessing import connection
import sqlite3

connection = sqlite3.connect('database.db')

with open('players.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO players (name) VALUES (?)", ("pogba",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("messi",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("kante",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("costa",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("salah",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("cisse",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("klose",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("terry",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("matic",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("matip",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("coman",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("clyne",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("defoe",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("sagna",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("sakho",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("vardy",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("jones",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("blind",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("young",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("keane",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("payet",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("giggs",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("iwobi",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("pedro",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("viera",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("noble",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("oscar",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("depay",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("delph",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("navas",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("zouma",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("gomez",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("nasri",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("vidic",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("tadic",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("gueye",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("gayle",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("fonte",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("moses",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("tevez",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("vieri",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("xhaka",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("pirlo",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("henry",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("silva",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("toure",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("sagna",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("mason",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("bowen",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("mikel",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("neuer",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("adams",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("toney",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("suker",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("alaba",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("mendy",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("white",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("evans",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("romeu",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("gomis",))
cur.execute("INSERT INTO players (name) VALUES (?)", ("origi",))

connection.commit()
connection.close()
