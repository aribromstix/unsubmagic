(() => {
  const links = [];
  document.querySelectorAll('a').forEach(a => {
    const txt = (a.textContent || '').toLowerCase();
    if (txt.includes('unsubscribe')) {
      links.push(a.href);
    }
  });
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === 'GET_UNSUB_LINKS') {
      sendResponse({ links });
    }
  });
})();
