import os
from flask import Flask,redirect,render_template,request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/uploadrequest')
def uploadrequest():
    return render_template('uploadrequest.html')
    
@app.route('/uploadrequest/datahandler', method=['GET', 'POST'])
def uploadrequestdatahandler():
    error = None
    #if request.method == 'POST':
        #return redirect('./', code=302)
        #return render_template('datahandler.html')
    return render_template('datahandler.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 80))
    app.run(host='0.0.0.0', port=port)
