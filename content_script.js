// © 2025 UnsubMagic. Licensed under the MIT License.
(() => {
  const links = [];
  document.querySelectorAll('a').forEach(a => {
    const text = (a.textContent || '').toLowerCase();
    if (text.includes('unsubscribe')) {
      links.push(a.href);
    }
  });
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === 'GET_UNSUB_LINKS') {
      sendResponse({ links });
    }
  });
})();
