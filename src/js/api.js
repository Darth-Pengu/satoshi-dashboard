const { API_URL, WS_URL } = require('./config');

async function getJson(path, opts = {}) {
  const url = path.startsWith('http') ? path : `${API_URL}${path}`;
  const res = await fetch(url, { ...opts, headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) } });
  if (!res.ok) throw new Error(`GET ${url} failed: ${res.status}`);
  return res.json();
}

function connectWs({ onMessage, onOpen, onClose, retryMs = 2000 } = {}) {
  let ws;
  let stopped = false;
  function connect() {
    if (stopped) return;
    ws = new WebSocket(WS_URL);
    ws.onopen = () => { if (onOpen) onOpen(ws); };
    ws.onmessage = (ev) => {
      try { const msg = JSON.parse(ev.data); onMessage && onMessage(msg); } catch (_) { /* ignore */ }
    };
    ws.onclose = () => {
      if (onClose) onClose();
      if (!stopped) setTimeout(connect, retryMs);
    };
    ws.onerror = () => { try { ws.close(); } catch (_) {} };
  }
  connect();
  return { stop() { stopped = true; try { ws && ws.close(); } catch (_) {} } };
}

module.exports = { getJson, connectWs, API_URL, WS_URL };