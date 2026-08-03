# ⚡ LexiFlow 🇰🇭

**A browser extension built for people who understand better by listening than reading.**

![LexiFlow](https://img.shields.io/badge/version-2.0.0-cyan) ![License](https://img.shields.io/badge/license-MIT-green) ![Platform](https://img.shields.io/badge/platform-Chromium-blue)

---

## 📖 Table of Contents

- [Why I Built This](#why-i-built-this)
- [What It Does](#what-it-does)
- [Screenshots](#screenshots)
- [System Requirements](#system-requirements)
- [Installation Guide](#installation-guide)
  - [Step 1: Get The Code](#step-1-get-the-code)
  - [Step 2: Load Into Your Browser](#step-2-load-into-your-browser)
  - [Step 3: Test It](#step-3-test-it)
- [How To Use It](#how-to-use-it)
- [Supported Languages](#supported-languages)
- [Supported Browsers](#supported-browsers)
- [Troubleshooting](#troubleshooting)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Why I Built This

I created LexiFlow while studying for the Anthropic 101 course. I noticed I absorb information much better through **listening** than reading — but most study material online is text-only. Copy-pasting into translator apps every time broke my focus and slowed me down.

So I built LexiFlow: select any text on any webpage, and it instantly reads it aloud in the correct language. No app switching, no copy-paste. Just select and listen.

I'm a native Khmer speaker based in Cambodia, and most language tools handle Khmer poorly or not at all — so proper Khmer support was a priority from day one, not an afterthought.

---

## What It Does

- ✅ Select any text on any webpage
- ✅ Auto-detects the language of the selected text
- ✅ One click to hear it read aloud, naturally
- ✅ Manually override the detected language if it guesses wrong
- ✅ Copy the selected text with one click
- ✅ Works entirely client-side — no account, no login, no backend server required
- ✅ Dark cyberpunk-themed UI

---

## Screenshots

*(Add screenshots here — see [Contributing](#contributing) if you'd like to help with this!)*---

## System Requirements

- A Chromium-based browser (Brave, Chrome, Edge, Opera, Vivaldi)
- An internet connection (for the text-to-speech audio and language detection to work)
- No installation of Node, Python, or any backend required to USE the extension

---

## Installation Guide

### Step 1: Get The Code

**Option A — Clone with Git:**
```bash
git clone https://github.com/cloner-Ng/lexiflow.git
cd lexiflow
```

**Option B — Download ZIP:**
1. Go to https://github.com/cloner-Ng/lexiflow
2. Click the green **Code** button → **Download ZIP**
3. Extract the ZIP file anywhere on your computer

---

### Step 2: Load Into Your Browser

**For Brave:**
1. Open Brave
2. Go to the address bar and type: `brave://extensions`
3. Press Enter
4. Turn ON **Developer mode** (toggle in the top-right corner)
5. Click **Load unpacked**
6. Navigate to the folder where you cloned/extracted LexiFlow
7. Select the `apps/extension` folder specifically (not the root `lexiflow` folder)
8. Click **Select**
9. LexiFlow should now appear in your extensions list

**For Google Chrome:**
1. Open Chrome
2. Go to: `chrome://extensions`
3. Turn ON **Developer mode** (top-right toggle)
4. Click **Load unpacked**
5. Select the `apps/extension` folder
6. Done

**For Microsoft Edge:**
1. Open Edge
2. Go to: `edge://extensions`
3. Turn ON **Developer mode** (left sidebar toggle)
4. Click **Load unpacked**
5. Select the `apps/extension` folder
6. Done

**For Opera / Vivaldi:**
Same process — go to the browser's extensions page, enable Developer mode, and Load unpacked pointing to `apps/extension`.

---

### Step 3: Test It

1. Go to any website, for example `https://en.wikipedia.org`
2. Highlight/select a sentence with your mouse
3. A small **🔊 Listen** button should appear right above your selection
4. Click it
5. A bubble will open showing the detected language and a **Read Aloud** button
6. Click **Read Aloud** — it should speak the selected text

If it doesn't speak, see [Troubleshooting](#troubleshooting) below.

---

## How To Use It

| Action | What Happens |
|---|---|
| Select text with your mouse | A small floating button appears |
| Click the floating button | A bubble opens with the text and detected language |
| Click "Read Aloud" | The text is spoken out loud |
| Click "Read Aloud" again while playing | Stops the audio |
| Change the language dropdown | Manually pick a different language if auto-detect was wrong, then click Read Aloud again |
| Click "Copy" | Copies the selected text to your clipboard |
| Click outside the bubble | Closes it |

---

## Supported Languages

Auto-detection currently supports:

| Language | Code | Script Detected |
|---|---|---|
| English | en | Default fallback |
| Khmer 🇰🇭 | km | Khmer Unicode block |
| Chinese | zh | CJK Unicode block |
| Japanese | ja | Hiragana/Katakana block |
| Korean | ko | Hangul block |
| Thai | th | Thai Unicode block |
| Arabic | ar | Arabic Unicode block |

You can also manually select: French, Vietnamese, Spanish, German from the dropdown even if not auto-detected.

---

## Supported Browsers

| Browser | Status |
|---|---|
| Brave | ✅ Fully working |
| Google Chrome | ✅ Fully working |
| Microsoft Edge | ✅ Fully working |
| Opera / Vivaldi | ✅ Should work (Chromium-based) |
| Firefox | ❌ Not yet supported (different extension format) |
| Safari | ❌ Not supported |

---

## Troubleshooting

**The floating button doesn't appear when I select text**
- Make sure you're on a regular webpage (`https://...`), not a browser settings page or PDF viewer — extensions can't run on those by design.
- Try reloading the extension: go to your browser's extensions page and click the reload icon on LexiFlow.

**"Translation failed" or nothing happens after clicking the button**
- Check your internet connection — LexiFlow needs it to detect/speak text.
- The selected text may be too long — try selecting a shorter sentence.

**No sound plays when I click "Read Aloud"**
- This uses Google Translate's audio endpoint, so check your device volume isn't muted.
- Some browsers block autoplay audio on first interaction — click somewhere on the page first, then try again.

**It doesn't work on `chrome://` or `brave://` pages**
- This is expected browser behavior — extensions cannot run on internal browser pages for security reasons.

---

## Tech Stack

- **Manifest V3** browser extension (no build tools required)
- **Vanilla JavaScript** — no frameworks, no dependencies
- **Google Translate TTS audio endpoint** for natural-sounding speech
- **Unicode range detection** for automatic language identification (no external API needed for detection)

---

## Project Structure
lexiflow/
├── apps/
│ └── extension/
│ ├── manifest.json ← extension configuration
│ ├── content.js ← core logic (detection, UI, speech)
│ └── content.css ← styling for the floating bubble
├── README.md
├── CONTRIBUTING.md
└── LICENSE
---

## Roadmap

- [ ] Firefox support
- [ ] Keyboard shortcut to trigger listen without clicking
- [ ] Remember your preferred voice per language
- [ ] Offline mode (no internet required)
- [ ] Mobile browser support (Kiwi Browser on Android)
- [ ] Adjustable speech speed
- [ ] History of listened selections

---

## Contributing

Contributions are very welcome — see [CONTRIBUTING.md](./CONTRIBUTING.md) for how to get started. All skill levels welcome, especially if you care about accessibility, language learning tools, or Khmer language support.

---

## License

MIT — free to use, modify, and share. See [LICENSE](./LICENSE).

---

Built with ❤️ in Cambodia by [cloner-Ng](https://github.com/cloner-Ng)
