from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from lang.genjs import generate_js_code

app = FastAPI()


# Allow CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Define question structure here
class Query(BaseModel):
    question: str


# API Routes
@app.post("/generate/")
def generate_code(query: Query):
    result = generate_js_code(query.question)
    if not result:
        raise HTTPException(status_code=400, detail="Invalid or Unsupported Question!")
    return result

@app.get("/")
def api_main():
    return {
        "success": True,
        "message": "Welcome to the backend of Tutor AI"
    }


@app.api_route("/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"])
def catch_all():
    raise HTTPException(status_code=404, detail=f"The endpoint does not exist. Please check your route.")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
