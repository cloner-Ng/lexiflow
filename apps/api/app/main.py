from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="LexiFlow API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "chrome-extension://*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"status": "LexiFlow API running!"}

@app.get("/translate")
async def translate(text: str, target: str = "en", source: str = "auto"):
    return {
        "original": text,
        "translation": f"[Translated: {text}]",
        "source_lang": source,
        "target_lang": target,
        "provider": "mock"
    }

@app.get("/health")
async def health():
    return {"status": "ok"}
