from urllib import response
from flask import Flask, request, jsonify
from flask_cors import CORS
from controllers import players

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "<h1>Welcome to this Wordle API</h1>"

@app.route('/players', methods = ['GET'])
def players_handler():
    fns = {
        'GET': players.index
    }
    response, code = fns[request.method](request)
    return jsonify(response), code

@app.route('/random', methods = ['GET'])
def random_handler():
    fns = {
        'GET': players.random
    }
    response, code = fns[request.method](request)
    return jsonify(response), code

if __name__ == '__main__':
    app.run(debug=True)
