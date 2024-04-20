import tweepy
import tweepy.asynchronous

class TwitterHelper():
    def __init__(self, consumer_key, consumer_secret, access_token, access_token_secret):
        self.auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
        self.auth.set_access_token(access_token, access_token_secret)
        self.api = tweepy.asynchronous.AsyncClient(self.auth)

    def get_followers(self):
        return self.api.followers()