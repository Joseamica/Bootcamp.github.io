from flask import Flask, render_template
#import mars as m
# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo

#borrar
import os
from bs4 import BeautifulSoup as bs
from splinter import Browser
import pandas as pd

executable_path = {'executable_path': '/usr/local/bin/chromedriver'}
browser = Browser('chrome', **executable_path, headless=False)

html = browser.html
soup = bs(html, 'html.parser')

url_pics = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
browser.visit(url_pics)
xxx = browser.find_by_id('full_image')
xxx.click()


featured_image_url = browser.find_by_css('img.fancybox-image')['src']
print(featured_image_url)

mars_hemispheres_url = 'https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars'


# In[24]:


browser.visit(mars_hemispheres_url)
html = browser.html
soup = bs(html, 'html.parser')

ast_url = f"https://astrogeology.usgs.gov"

hemisphere_image_urls = []
hemispheresLinks = soup.find_all("div", class_="description")

for link in hemispheresLinks:
        url = ast_url + link.a["href"]
        browser.visit(url)
        soup = bs(browser.html, 'html.parser')
        image = ast_url + soup.find("img", class_="wide-image")["src"]
        title = soup.find("h2", class_="title").text.replace(" Enhanced", "")
        hemisphere_image_urls.append( { "title" : title, "img_url" : image } )

# Create an instance of our Flask app.
app = Flask(__name__)

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client.mars
hemispheres = db.hemispheres
title = db.title
# Drops collection if available to remove duplicates

# Creates a collection in the database and inserts two documents
db.hemispheres.insert_many(hemisphere_image_urls)
db.title.insert_one({'url':featured_image_url})


# Set route
@app.route('/')
def hello_world():
        return render_template("index.html")

@app.route("/scrape")
def index():
    # write a statement that finds all the items in the db and sets it to a variable
    hemispheres_list = list(db.hemispheres.find())
    print(hemispheres_list)
    featured_image = list(db.title.find())
    # render an index.html template and pass it the data you retrieved from the database
    return render_template("index.html", hemispheres_list=hemispheres_list, featured_image=featured_image)


if __name__ == "__main__":
    app.run(debug=True)
