chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'lexiflow-translate',
    title: 'Translate with LexiFlow',
    contexts: ['selection']
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'SELECTION_CHANGED') {
    const text = msg.payload.text;
    fetch(`http://localhost:8000/translate?text=${encodeURIComponent(text)}&target=en`)
      .then(r => r.json())
      .then(data => sendResponse({ success: true, data }))
      .catch(() => sendResponse({ success: false }));
    return true;
  }
});

chrome.commands.onCommand.addListener((command) => {
  if (command === 'translate-selection') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'TRANSLATE_NOW' });
      }
    });
  }
});
