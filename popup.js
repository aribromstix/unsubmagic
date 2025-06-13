document.addEventListener('DOMContentLoaded', () => {
  const statusEl = document.getElementById('status');
  const listEl = document.getElementById('links-list');
  const btn = document.getElementById('unsubscribe-all');

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (!tabs[0] || !tabs[0].id) {
      statusEl.textContent = 'Brak aktywnej karty.';
      return;
    }
    chrome.tabs.sendMessage(tabs[0].id, { type: 'GET_UNSUB_LINKS' }, res => {
      if (chrome.runtime.lastError || !res || !Array.isArray(res.links)) {
        statusEl.textContent = 'Brak linków lub content script nie załadowany.';
        return;
      }
      statusEl.textContent = `Znaleziono ${res.links.length} linków:`;
      listEl.innerHTML = '';
      if (res.links.length > 0) {
        res.links.forEach(url => {
          const li = document.createElement('li');
          const cb = document.createElement('input');
          cb.type = 'checkbox';
          cb.value = url;
          li.append(cb, document.createTextNode(' ' + url));
          listEl.appendChild(li);
        });
        btn.disabled = false;
      } else {
        listEl.innerHTML = '<li>Brak linków unsubscribe na tej stronie.</li>';
      }
    });
  });

  btn.addEventListener('click', () => {
    document.querySelectorAll('#links-list input:checked').forEach(cb => {
      chrome.tabs.create({ url: cb.value, active: false });
    });
  });
});
