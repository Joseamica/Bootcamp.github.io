# Imports

import pandas as pd
from bs4 import BeautifulSoup as bs
import requests
from splinter import Browser
import pymongo
import re


conn = 'mongodb://localhost:27017'


def scrapeMars():

	# Set up Splinter
	executable_path = {'executable_path': '/usr/local/bin/chromedriver'}
	with Browser('chrome', **executable_path, headless=False) as browser:
		
		# Soupify the NASA Mars url
		url = f"https://mars.nasa.gov/news/"
		browser.visit(url)
		soup = bs(browser.html, 'html.parser')
		newsTitle = soup.find("div", class_="content_title").text
		newsDescription = soup.find("div", class_="article_teaser_body").text


		# Visit the JPL site
		jplUrl = f"https://www.jpl.nasa.gov"
		marsImagesUrlParam = "/spaceimages/?search=&category=Mars"
		browser.visit(jplUrl + marsImagesUrlParam)
		soup = bs(browser.html, 'html.parser')
		article = soup.find("article", class_="carousel_item")
		image = article["style"].split("'")
		featured_image_url = jplUrl + image[1]


		# Mars Weather
		marsWeatherTwitterUrl = f"https://twitter.com/marswxreport?lang=en"
		browser.visit(marsWeatherTwitterUrl)
		soup = bs(browser.html, 'html.parser')
		mars_weather = soup.find('p', class_="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text").text
		mars_weather = soup.find('p', text = re.compile('InSight'), attrs = {'class' : 'TweetTextSize TweetTextSize--normal js-tweet-text tweet-text'}).text

		# Mars Facts
		marsFactsUrl = f"https://space-facts.com/mars/"
		marsFacts = pd.read_html(marsFactsUrl)
		marsFacts = marsFacts[1]
		marsFacts.columns = ["Description", "Value"]
		marsFacts.set_index("Description", inplace = True)


		# Mars Hemispheres
		astrogeologyUrl = f"https://astrogeology.usgs.gov"
		searchUrl = f"/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
		mainPageUrl = astrogeologyUrl + searchUrl
		imageList = []
		browser.visit(mainPageUrl)
		soup = bs(browser.html, 'html.parser')
		hemispheresLinks = soup.find_all("div", class_="description")
		for link in hemispheresLinks:
			hemisphereUrl = astrogeologyUrl + link.a["href"]
			browser.visit(hemisphereUrl)
			soup = bs(browser.html, 'html.parser')
			image = astrogeologyUrl + soup.find("img", class_="wide-image")["src"]
			title = soup.find("h2", class_="title").text.replace(" Enhanced", "")
			imageList.append( { "title" : title, "img_url" : image } )

	
	data = {
		"newsTitle" : newsTitle,
		"newsDescription" : newsDescription,
		"featuredImageUrl" : featured_image_url,
		"marsWeather" : mars_weather,
		"marsFacts" : marsFacts.to_dict(),
		"imageList" : imageList
	}
	return data


def storeInDb(data):
	conn = 'mongodb://localhost:27017'
	client = pymongo.MongoClient(conn)
	db = client.Mars
	db.MarsData.drop()
	db.MarsData.insert(data)
	client.close()


def getData():
    conn = 'mongodb://localhost:27017'
    client = pymongo.MongoClient(conn)
    db = client.Mars
    collection = db.MarsData
    data = collection.find_one()
    return data