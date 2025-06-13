![UnsubMagic](https://raw.githubusercontent.com/aribromstix/unsubmagic/main/unsubmagic_icon.png)  
# UnsubMagic

![Users](https://img.shields.io/badge/Users-0-informational)  
![Analytics](https://img.shields.io/badge/Analytics-enabled-brightgreen)

**One click to unsubscribe from all newsletters.**

## Sign up for the Beta

Send an email to **[Adam.kaczorowski84+beta@gmail.com](mailto:Adam.kaczorowski84+beta@gmail.com)**  
with subject `UnsubMagic Beta`  
and I’ll send you the bookmarklet and quick start guide.

---

## How to install the UnsubMagic bookmarklet

1. In your browser, **show the bookmarks bar**:  
   - Chrome/Brave/Edge: `Ctrl + Shift + B`  
2. **Right-click** on the bookmarks bar → **Add page…**  
   - **Name:** `UnsubMagic`  
   - **URL:**  
     ```
     javascript:(()=>{const els=[...document.querySelectorAll('a, button')];const targets=els.filter(e=>{const t=(e.textContent||'').toLowerCase();const a=(e.getAttribute('aria-label')||'').toLowerCase();return t.includes('unsubscribe')||a.includes('unsubscribe');});targets.forEach(e=>e.tagName==='A'?window.open(e.href,'_blank'):e.click());alert(`Performed ${targets.length} unsubscribe actions`);})();
     ```
3. Click **Save**.  
4. Open **any newsletter** in Gmail or Outlook Web and click the “UnsubMagic” bookmark to automatically unsubscribe.

---

## Roadmap

- [ ] Single-click full-automation (Chrome/Firefox extension)  
- [ ] ML-based link detection & classification (patent)  
- [ ] Enterprise dashboard & reporting  
- [ ] Mobile support (iOS/Android shortcut)  

---

## FAQ

**Q: Why is it a two-step flow?**  
A: First step injects the script; second confirms Gmail’s modal. We’ll automate that in the extension.

**Q: How do alias emails work?**  
A: Send to `Adam.kaczorowski84+beta@gmail.com` and it lands in your `Adam.kaczorowski84@gmail.com` inbox.

**Q: Will there be a paid plan?**  
A: Core bookmarklet remains free; advanced features (scheduling, reports) planned as premium.

---

## Savings Calculator

Enter how many newsletters you receive per week to see your estimated time savings:

```html
<label>Your newsletters/week: <input id="n" type="number" value="10" min="0"></label>
<p id="out"></p>
<script>
  document.getElementById('n').addEventListener('input', e => {
    const n = +e.target.value;
    const secsSaved = n * 15; // assume 15s per manual unsubscribe
    const hours = (secsSaved * 52 / 3600).toFixed(1);
    document.getElementById('out').textContent =
      `~${hours} hours saved per year`;
  });
  document.getElementById('n').dispatchEvent(new Event('input'));
</script>
