const { getJson, connectWs } = require('./api');

function createRowHtml(item, hasCheckbox = true) {
  return `
  <tr>
    <td>
      <div class="d-flex align-items-center gap-3 ps-1">
        ${hasCheckbox ? `<div class="text-base"><div class="form-check"><input class="form-check-input" type="checkbox" /></div></div>` : ''}
        <div class="d-none d-xl-inline-flex icon icon-shape w-rem-8 h-rem-8 rounded-circle text-sm bg-secondary bg-opacity-25 text-secondary">
          <i class="bi bi-file-fill"></i>
        </div>
        <div>
          <span class="d-block text-heading fw-bold">${item.name}</span>
        </div>
      </div>
    </td>
    <td class="text-xs">${item.from_currency} <i class="bi bi-arrow-right mx-2"></i> ${item.to_currency}</td>
    <td>${item.rate}</td>
    <td>$${item.amount}</td>
    <td class="d-none d-xl-table-cell">${item.date}</td>
    <td class="d-none d-xl-table-cell">
      <span class="badge badge-lg badge-dot"><i class="bg-${item.badge?.color || 'secondary'}"></i>${item.badge?.text || ''}</span>
    </td>
    <td class="d-none d-xl-table-cell">${item.required_action || ''}</td>
    <td class="text-end"><button type="button" class="btn btn-sm btn-square btn-neutral w-rem-6 h-rem-6"><i class="bi bi-three-dots"></i></button></td>
  </tr>`;
}

async function initTradesLive() {
  const tbody = document.getElementById('trades-body');
  if (!tbody) return;

  // Fetch initial
  try {
    const trades = await getJson('/api/trades?limit=50');
    tbody.innerHTML = trades.map((t) => createRowHtml(t)).join('');
  } catch (e) {
    // silently ignore; fallback to static rows
  }

  // Live updates
  connectWs({
    onMessage: (msg) => {
      if (msg?.type === 'trade_fill' && msg.data) {
        const row = createRowHtml(msg.data);
        // prepend
        const temp = document.createElement('tbody');
        temp.innerHTML = row.trim();
        const newRow = temp.firstElementChild;
        if (tbody.firstElementChild) tbody.insertBefore(newRow, tbody.firstElementChild); else tbody.appendChild(newRow);
      }
    },
  });
}

module.exports = { initTradesLive };