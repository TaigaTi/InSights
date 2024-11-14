"""This file will serve to handle the Twitter API routes."""

from fastapi import APIRouter
from helpers.youtubeHelper import YoutubeHelper

router = APIRouter(prefix="/api/v1/youtube", tags=["YouTube"])

@router.get("/likes")
async def get_likes():
    return {"Likes": 57}

@router.get("/subscribed")
async def get_subscribed():
    return {"Subscribed": 12345}

@router.get("/subscribers")
async def get_subscribers():
    return {"Subscribers": 54321}

@router.get("/videos")
async def get_videos():
    return {"Videos": 69}
