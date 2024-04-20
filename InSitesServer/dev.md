# InSites Server Information

This file will serve as a location to document and provide information on the Server side of InSites, which will be developed using FastAPI and Python.

# Overview
This serve will be responsible for interacting with various APIs to provide analytics for a user, about their various social media sites, in specific:
- Youtube
- Twitter
- Instagram
- TikTok

## Services
As mentioned, this server will act as an API to serve the information to the client side. 

For each social media platform, the following API's will be used (tentative and subject to change.)

### Youtube
Library: analytix

#### Endpoints


### Instagram
Library: TikTokApi

#### Endpoints

### TikTok
Library: insta-scrape

#### Endpoints

### Twitter
Library: Tweepy

#### Endpoints

### Twitter
Library: Tweepy

#### Endpoints
- GET /api/v1/twitter/followers: Returns the number of users following a user
- GET /api/v1/twitter/following: Returns the number of users a user is following
- GET /api/v1/twitter/posts: Returns the number of posts a user has made