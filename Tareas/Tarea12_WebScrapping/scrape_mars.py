#!/usr/bin/env python
# coding: utf-8

# In[18]:


#import dependencies
import os
from bs4 import BeautifulSoup as bs
from splinter import Browser
import pandas as pd


# In[19]:


executable_path = {'executable_path': '/usr/local/bin/chromedriver'}
browser = Browser('chrome', **executable_path, headless=False)


# In[20]:


#open chrome and visit url
url_nasa = 'https://mars.nasa.gov/news/?page=0&per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&category=19%2C165%2C184%2C204&blank_scope=Latest'
browser.visit(url_nasa)


# In[ ]:


html = browser.html
soup = bs(html, 'html.parser')


# In[ ]:


#print all titles and news 

for node in soup.find_all('div', class_="list_text"):
    title = node.find('div', class_="content_title", text=True).text
    news = node.find('div', class_="article_teaser_body").text
    print('Title: ' + title)
    print('News: ' + news)
    print('-'*30)
        


# In[ ]:


#visit the pictures 
url_pics = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
browser.visit(url_pics)


# In[ ]:


html = browser.html
soup = bs(html, 'html.parser')


# In[ ]:


#find all pictures fullsize
""" nasa_url = 'https://www.jpl.nasa.gov/spaceimages/images/largesize'
nasa_urls = []
for node in soup.find_all('div', class_="img"):
    try:
        browser.find_by_css('img.thumb').first.click()
    except:
        pass
    #thumb = node.find('img', class_="thumb")
    try:
        browser.find_by_css('a.fancybox-nav.fancybox-next').first.click()
        print('Link: ' + browser.find_by_css('img.fancybox-image')['src'])
        nasa_urls.append(browser.find_by_css('img.fancybox-image')['src'])
        print('')

    except :
        print('algo esta mal en 2019') """

    #print(thumb['src'])
    
    


# In[ ]:

url_pics = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
browser.visit(url_pics)
xxx = browser.find_by_id('full_image')
xxx.click()


# In[ ]:


#feature image scrap url
featured_image_url = browser.find_by_css('img.fancybox-image')['src']
print(featured_image_url)


# In[ ]:


#visit twitter from mars 
twitter_url = 'https://twitter.com/marswxreport?lang=en'


# In[ ]:


#scrap last tweet from mars twitter
mars_weather = []
for i in range(1):
    browser.visit(twitter_url)
    browser.find_by_css('ol.stream-items').first.click()
    mars_weather.append(browser.find_by_css('p.TweetTextSize').text)


# In[ ]:


#convert list to string
mars_weather = ''.join(mars_weather)
print(mars_weather)
type(mars_weather)


# ## Mars Facts
# **Visit the Mars Facts webpage here and use Pandas to scrape the table containing facts about the planet including Diameter, Mass, etc.**
# 
# 
# **Use Pandas to convert the data to a HTML table string.**

# In[ ]:


mars_facts_url = 'https://space-facts.com/mars/'


# In[ ]:


#scrap last tweet from mars twitter
browser.visit(mars_facts_url)

mars_facts = pd.read_html(mars_facts_url)
mars_facts_df = mars_facts[0]
mars_facts_df = mars_facts_df.set_index(mars_facts_df['Mars - Earth Comparison'])
mars_facts_df.drop(columns="Mars - Earth Comparison")


# In[ ]:


mars_facts_df


# In[ ]:


mars_html_df = mars_facts_df.to_html('mars_facts.html')


# ## Mars Hemispheres
# **Visit the USGS Astrogeology site here to obtain high resolution images for each of Mar's hemispheres.**
# 
# 
# **You will need to click each of the links to the hemispheres in order to find the image url to the full resolution image.**
# 
# 
# **Save both the image url string for the full resolution hemisphere image, and the Hemisphere title containing the hemisphere name. Use a Python dictionary to store the data using the keys img_url and title.**
# 
# 
# **Append the dictionary with the image url string and the hemisphere title to a list. This list will contain one dictionary for each hemisphere.**
# 
# 
# hemisphere_image_urls = [
#     {"title": "Valles Marineris Hemisphere", "img_url": "..."},
#     {"title": "Cerberus Hemisphere", "img_url": "..."},
#     {"title": "Schiaparelli Hemisphere", "img_url": "..."},
#     {"title": "Syrtis Major Hemisphere", "img_url": "..."},
# ]
# 

# In[16]:


#mars_
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


# In[25]:


hemisphere_image_urls


# In[ ]:


hemisphere_image_urls


# In[32]:


for i in hemispheresLinks:
    print(ast_url + i.a['href'])


# In[ ]:




