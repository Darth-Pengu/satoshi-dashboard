function resolveBaseUrls() {
  const html = document.documentElement;
  const dataApi = html ? html.getAttribute('data-api-url') : null;
  const dataWs = html ? html.getAttribute('data-ws-url') : null;
  const envApi = (typeof process !== 'undefined' && process.env && process.env.API_URL) ? process.env.API_URL : null;
  const envWs = (typeof process !== 'undefined' && process.env && process.env.WS_URL) ? process.env.WS_URL : null;

  const apiUrl = dataApi || envApi || 'http://localhost:4000';
  const wsUrl = dataWs || envWs || apiUrl.replace(/^http/, 'ws') + '/ws';

  return { API_URL: apiUrl, WS_URL: wsUrl };
}

module.exports = resolveBaseUrls();