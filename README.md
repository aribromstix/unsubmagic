## Sign up for the beta

## How to install the UnsubMagic bookmarklet

1. In your browser, **show the bookmarks bar**:
   - Chrome/Brave/Edge: Ctrl + Shift + B  
2. **Right-click** on the bookmarks bar → **Add page…**  
   - **Name:** `UnsubMagic`  
   - **URL:**  
     ```
     javascript:(()=>{const links=[...document.querySelectorAll('a')].filter(a=>/unsubscribe/i.test(a.textContent||'')).map(a=>a.href);links.forEach(u=>window.open(u,'_blank'));alert(`Otwieram ${links.length} linków`);})();
     ```
3. Click **Save**.  
4. Now, open **any newsletter** in Gmail or Outlook Web and simply **click the “UnsubMagic”** bookmark to automatically open all unsubscribe links.

Send email to
**[adam.kaczorowski84+beta@gmail.com](mailto:adam.kaczorowski84+beta@gmail.com**
with subject 'UnsubMagic Beta' and I will send you the bookmarklet
and quick start guide.
