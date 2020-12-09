import os
from flask import Flask,redirect,render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/uploadrequest')
def uploadrequest():
    return render_template('uploadrequest.html')
    
@app.route('/datahandler')
def datahandler():
    return render_template("this is the data handler")

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 80))
    app.run(host='0.0.0.0', port=port)
