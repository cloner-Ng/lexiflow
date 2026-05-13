chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'lexiflow-translate',
    title: 'Translate with LexiFlow',
    contexts: ['selection']
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'SELECTION_CHANGED') {
    handleSelection(msg.payload).then(sendResponse);
    return true;
  }
});

async function handleSelection(payload: any) {
  const { text } = payload;
  try {
    const res = await fetch(`http://localhost:8000/translate?text=${encodeURIComponent(text)}&target=en`, {
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    return { success: true, data };
  } catch (err) {
    return { success: false, error: 'API not reachable' };
  }
}

chrome.commands.onCommand.addListener((command) => {
  if (command === 'translate-selection') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'TRANSLATE_NOW' });
      }
    });
  }
});
