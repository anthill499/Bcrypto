from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/")
def hello_world():
    return jsonify({ "msg": "Hello! I am Richard. Your personal AI assistant!"})
