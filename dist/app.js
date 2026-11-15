(() => {
  const form = document.querySelector('#guestbook-form');
  if (!form) return;
  const list = document.querySelector('#local-messages');
  const status = document.querySelector('#message-status');
  const key = 'portfolio-guestbook-v1';
  let messages = [];
  try { messages = JSON.parse(localStorage.getItem(key) || '[]'); if (!Array.isArray(messages)) messages = []; } catch { messages = []; }
  function render() {
    list.replaceChildren();
    for (const message of messages) {
      const row = document.createElement('article'); row.className = 'local-message';
      const text = document.createElement('p'); text.textContent = message.text;
      const byline = document.createElement('p'); byline.className = 'font-mono text-xs text-zinc-500'; byline.textContent = `${message.name} · ${message.date} · saved locally`;
      row.append(text, byline); list.append(row);
    }
  }
  render();
  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = form.elements.name.value.trim(); const text = form.elements.message.value.trim();
    if (!name || !text) { status.textContent = 'Please enter your name and a message.'; return; }
    const next = [{ name, text, date: new Date().toLocaleDateString('en-US', {month:'short',day:'numeric',year:'numeric'}) }, ...messages];
    try { localStorage.setItem(key, JSON.stringify(next)); messages = next; render(); form.reset(); status.textContent = 'Your message was saved in this browser.'; }
    catch { status.textContent = 'Browser storage is unavailable. Your message has not been saved.'; }
  });
})();
