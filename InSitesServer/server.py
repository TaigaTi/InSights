from fastapi import FastAPI
from routers import twitter

app = FastAPI()

app.include_router(twitter.router)

@app.get("/")
async def index():
    return {"message": "Hello World"}

if __name__ == "__main__":
    import uvicorn 

    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)