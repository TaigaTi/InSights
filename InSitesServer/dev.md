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
- GET /api/v1/youtube/likes: Returns the number of likes a user has on their channel
- GET /api/v1/youtube/followers: Returns the number of followers a user has on their channel
- GET /api/v1/youtube/following: Returns the number of users a user is following on YouTube
- GET /api/v1/youtube/videos: Returns the number of videos a user has uploaded

### Instagram
Library: insta-scrape

#### Endpoints
- GET /api/v1/instagram/likes: Returns the number of likes a user has on their profile
- GET /api/v1/instagram/followers: Returns the number of followers a user has
- GET /api/v1/instagram/following: Returns the number of users a user is following
- GET /api/v1/instagram/posts: Returns the number of posts a user has made

### TikTok
Library: TikTokApi

#### Endpoints
- GET /api/v1/tiktok/likes: Returns the number of likes a user has on their profile
- GET /api/v1/tiktok/followers: Returns the number of followers a user has
- GET /api/v1/tiktok/following: Returns the number of users a user is following
- GET /api/v1/tiktok/posts: Returns the number of posts a user has made
- GET /api/v1/tiktok/stories: Returns the number of stories a user has made

### Twitter
Library: Tweepy

#### Endpoints
- GET /api/v1/twitter/followers: Returns the number of users following a user
- GET /api/v1/twitter/following: Returns the number of users a user is following
- GET /api/v1/twitter/posts: Returns the number of posts a user has made