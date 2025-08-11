const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const { WebSocketServer } = require('ws');
const path = require('path');

const PORT = process.env.PORT || 4000;
const AUTH_TOKEN = process.env.DASHBOARD_TOKEN || process.env.AUTH_TOKEN || '';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static build when available (for Railway web service)
const staticDir = path.join(__dirname, '..', 'build');
if (process.env.SERVE_STATIC !== 'false') {
  app.use(express.static(staticDir));
  app.get('/', (_req, res) => {
    res.sendFile(path.join(staticDir, 'pages', 'dashboard.html'), (err) => {
      if (err) res.sendFile(path.join(staticDir, 'index.html'), () => {});
    });
  });
}

function requireAuthIfConfigured(req, res, next) {
  if (!AUTH_TOKEN) return next();
  const header = req.headers['authorization'] || '';
  const bearer = header.startsWith('Bearer ') ? header.slice(7) : '';
  const apiKey = req.headers['x-api-key'] || '';
  const token = bearer || apiKey;
  if (token === AUTH_TOKEN) return next();
  return res.status(401).json({ error: 'unauthorized' });
}

// In-memory demo state; replace with your trading bot integration
let state = {
  summary: {
    equityUsd: 100000,
    pnl24hUsd: 250.42,
    openPositions: 2,
    openOrders: 1,
    updatedAt: new Date().toISOString(),
  },
  trades: [
    {
      name: 'Bought BTC',
      from_currency: 'BTC',
      to_currency: 'USDT',
      rate: '68000.12',
      amount: '0.0100',
      badge: { color: 'success', text: 'Filled' },
      date: new Date().toISOString(),
      required_action: 'None',
    },
  ],
  prices: [],
};

// Seed some price data
(function seedPrices() {
  const now = Date.now();
  let price = 68000;
  for (let i = 60; i >= 0; i -= 1) {
    const ts = new Date(now - i * 60 * 1000);
    const open = price + (Math.random() - 0.5) * 50;
    const close = open + (Math.random() - 0.5) * 30;
    state.prices.push({ date: ts.toISOString(), open, close });
    price = close;
  }
})();

// REST endpoints
app.get('/healthz', (_req, res) => res.json({ ok: true }));

app.get('/api/summary', (_req, res) => {
  res.json(state.summary);
});

app.get('/api/trades', (req, res) => {
  const limit = Number(req.query.limit || 100);
  res.json(state.trades.slice(-limit).reverse());
});

app.get('/api/prices', (req, res) => {
  // Optional: ?symbol=BTCUSDT&from=&to=
  res.json(state.prices);
});

// Accept trade events from the bot (simple demo)
app.post('/api/events/trade', requireAuthIfConfigured, (req, res) => {
  const trade = req.body;
  if (!trade || !trade.name) return res.status(400).json({ error: 'invalid trade' });
  // Normalize minimal shape
  const normalized = {
    name: trade.name,
    from_currency: trade.from_currency || trade.base || 'BTC',
    to_currency: trade.to_currency || trade.quote || 'USDT',
    rate: String(trade.rate ?? trade.price ?? ''),
    amount: String(trade.amount ?? trade.qty ?? ''),
    badge: { color: (trade.status === 'filled' ? 'success' : 'warning'), text: trade.status || 'Updated' },
    date: trade.date || new Date().toISOString(),
    required_action: trade.required_action || 'None',
  };
  state.trades.push(normalized);
  broadcast({ type: 'trade_fill', data: normalized });
  res.json({ ok: true });
});

// Accept price tick
app.post('/api/events/price', requireAuthIfConfigured, (req, res) => {
  const tick = req.body; // { symbol, price, ts }
  if (!tick || typeof tick.price !== 'number') return res.status(400).json({ error: 'invalid tick' });
  const date = tick.ts ? new Date(tick.ts) : new Date();
  const open = state.prices.length ? state.prices[state.prices.length - 1].close : tick.price;
  const close = tick.price;
  const point = { date: date.toISOString(), open, close };
  state.prices.push(point);
  broadcast({ type: 'price_tick', data: { symbol: tick.symbol || 'BTCUSDT', ts: date.toISOString(), price: tick.price } });
  res.json({ ok: true });
});

// Accept summary update
app.post('/api/events/summary', requireAuthIfConfigured, (req, res) => {
  const s = req.body || {};
  state.summary = {
    equityUsd: Number(s.equityUsd ?? state.summary.equityUsd),
    pnl24hUsd: Number(s.pnl24hUsd ?? state.summary.pnl24hUsd),
    openPositions: Number(s.openPositions ?? state.summary.openPositions),
    openOrders: Number(s.openOrders ?? state.summary.openOrders),
    updatedAt: new Date().toISOString(),
  };
  broadcast({ type: 'summary', data: state.summary });
  res.json({ ok: true });
});

const server = http.createServer(app);

// WebSocket for live updates
const wss = new WebSocketServer({ server, path: '/ws' });

function broadcast(obj) {
  const data = JSON.stringify(obj);
  wss.clients.forEach((client) => {
    if (client.readyState === 1) client.send(data);
  });
}

wss.on('connection', (ws) => {
  ws.send(JSON.stringify({ type: 'hello', data: { msg: 'connected' } }));
});

// Demo ticker to show it works; disable in production
const demoIntervalMs = Number(process.env.DEMO_TICK_MS || 5000);
setInterval(() => {
  // emit a price tick
  const last = state.prices[state.prices.length - 1];
  const base = last ? last.close : 68000;
  const nextPrice = base + (Math.random() - 0.5) * 30;
  const date = new Date();
  state.prices.push({ date: date.toISOString(), open: base, close: nextPrice });
  broadcast({ type: 'price_tick', data: { symbol: 'BTCUSDT', ts: date.toISOString(), price: nextPrice } });
}, demoIntervalMs);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API/WS server running on http://localhost:${PORT}`);
});