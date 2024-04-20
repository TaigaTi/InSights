from fastapi import FastAPI
from routers import twitter, instagram, tiktok, youtube

app = FastAPI()

app.include_router(twitter.router)
app.include_router(instagram.router)
app.include_router(tiktok.router)
app.include_router(youtube.router)

@app.get("/")
async def index():
    return {"message": "Hello World"}

if __name__ == "__main__":
    import uvicorn 

    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)