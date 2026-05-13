let debounceTimer: any;

const handleSelection = () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const sel = window.getSelection();
    const text = sel?.toString().trim();
    if (!text || text.length < 2) return;

    const range = sel!.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    chrome.runtime.sendMessage({
      type: 'SELECTION_CHANGED',
      payload: {
        text,
        x: rect.right + window.scrollX,
        y: rect.top + window.scrollY,
        url: window.location.href,
        title: document.title
      }
    });
  }, 300);
};

document.addEventListener('mouseup', handleSelection);
document.addEventListener('keyup', handleSelection);
