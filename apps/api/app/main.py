from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from deep_translator import GoogleTranslator

app = FastAPI(title="LexiFlow API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"status": "LexiFlow API running!"}

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.get("/translate")
async def translate(text: str, target: str = "en", source: str = "auto"):
    try:
        src = "auto" if source == "auto" else source
        translated = GoogleTranslator(
            source=src,
            target=target
        ).translate(text)

        return {
            "original": text,
            "translation": translated,
            "source_lang": source,
            "target_lang": target,
            "provider": "google"
        }
    except Exception as e:
        return {
            "original": text,
            "translation": f"Error: {str(e)}",
            "source_lang": source,
            "target_lang": target,
            "provider": "error"
        }
