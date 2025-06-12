chrome.runtime.onInstalled.addListener(() => {
  console.log('UnsubMagic extension installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'OAUTH_SUCCESS') {
    chrome.storage.local.set({ accessToken: message.token }, () => {
      sendResponse({ status: 'saved' });
    });
    return true;
  }
});