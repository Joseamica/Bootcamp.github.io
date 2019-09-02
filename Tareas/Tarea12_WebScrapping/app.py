from flask import Flask, render_template, redirect
#import mars as m
import scrape_mars
# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo
from datetime import datetime



# Create an instance of our Flask app.
app = Flask(__name__)

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available.


# Set route
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def scrape(name=None):
    return render_template('index.html', name=name)

@app.after_request
def add_header(response):
    # response.cache_control.no_store = True
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '-1'
    return response


@app.route('/scrapeMars')
def scrapeMars():
	marsData = scrape_mars.scrapeMars()
	scrape_mars.storeInDb(marsData)
	data = scrape_mars.getData()
	return render_template('index.html', data=data)