import os
from flask import Flask,redirect,render_template

server = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
