var t,e,n,r;t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},null==(r=t.parcelRequirec6c5)&&((r=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,r.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequirec6c5=r),r.register("1Ub1F",function(t,e){var n=r("k4xLy"),i=n.getJson,o=n.connectWs;function s(t,e=!0){var n,r;return`
  <tr>
    <td>
      <div class="d-flex align-items-center gap-3 ps-1">
        ${e?'<div class="text-base"><div class="form-check"><input class="form-check-input" type="checkbox" /></div></div>':""}
        <div class="d-none d-xl-inline-flex icon icon-shape w-rem-8 h-rem-8 rounded-circle text-sm bg-secondary bg-opacity-25 text-secondary">
          <i class="bi bi-file-fill"></i>
        </div>
        <div>
          <span class="d-block text-heading fw-bold">${t.name}</span>
        </div>
      </div>
    </td>
    <td class="text-xs">${t.from_currency} <i class="bi bi-arrow-right mx-2"></i> ${t.to_currency}</td>
    <td>${t.rate}</td>
    <td>$${t.amount}</td>
    <td class="d-none d-xl-table-cell">${t.date}</td>
    <td class="d-none d-xl-table-cell">
      <span class="badge badge-lg badge-dot"><i class="bg-${(null===(n=t.badge)||void 0===n?void 0:n.color)||"secondary"}"></i>${(null===(r=t.badge)||void 0===r?void 0:r.text)||""}</span>
    </td>
    <td class="d-none d-xl-table-cell">${t.required_action||""}</td>
    <td class="text-end"><button type="button" class="btn btn-sm btn-square btn-neutral w-rem-6 h-rem-6"><i class="bi bi-three-dots"></i></button></td>
  </tr>`}async function l(){let t=document.getElementById("trades-body");if(t){// Fetch initial
try{let e=await i("/api/trades?limit=50");t.innerHTML=e.map(t=>s(t)).join("")}catch(t){// silently ignore; fallback to static rows
}// Live updates
o({onMessage:e=>{if((null==e?void 0:e.type)==="trade_fill"&&e.data){let n=s(e.data),r=document.createElement("tbody");r.innerHTML=n.trim();let i=r.firstElementChild;t.firstElementChild?t.insertBefore(i,t.firstElementChild):t.appendChild(i)}}})}}t.exports={initTradesLive:l}}),r.register("k4xLy",function(t,e){var n=r("5uP5u"),i=n.API_URL,o=n.WS_URL;async function s(t,e={}){let n=t.startsWith("http")?t:`${i}${t}`,r=await fetch(n,{...e,headers:{"Content-Type":"application/json",...e.headers||{}}});if(!r.ok)throw Error(`GET ${n} failed: ${r.status}`);return r.json()}t.exports={getJson:s,connectWs:function({onMessage:t,onOpen:e,onClose:n,retryMs:r=2e3}={}){let i;let s=!1;return function l(){s||((i=new WebSocket(o)).onopen=()=>{e&&e(i)},i.onmessage=e=>{try{let n=JSON.parse(e.data);t&&t(n)}catch(t){}},i.onclose=()=>{n&&n(),s||setTimeout(l,r)},i.onerror=()=>{try{i.close()}catch(t){}})}(),{stop(){s=!0;try{i&&i.close()}catch(t){}}}},API_URL:i,WS_URL:o}}),r.register("5uP5u",function(t,e){var n=r("aKZwM");t.exports=function(){let t=document.documentElement,e=t?t.getAttribute("data-api-url"):null,r=t?t.getAttribute("data-ws-url"):null,i=(void 0!==n&&n.env,null),o=(void 0!==n&&n.env,null),s=e||i||"http://localhost:4000",l=r||o||s.replace(/^http/,"ws")+"/ws";return{API_URL:s,WS_URL:l}}()}),r.register("aKZwM",function(t,e){// shim for using process in browser
var n,r,i,o=t.exports={};function s(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);// if setTimeout wasn't available but was latter defined
if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return n(t,0)}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return n.call(null,t,0)}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(t){r=l}}();var c=[],u=!1,d=-1;function f(){u&&i&&(u=!1,i.length?c=i.concat(c):d=-1,c.length&&p())}function p(){if(!u){var t=a(f);u=!0;for(var e=c.length;e;){for(i=c,c=[];++d<e;)i&&i[d].run();d=-1,e=c.length}i=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);// if clearTimeout wasn't available but was latter defined
if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{// when when somebody has screwed with setTimeout but no I.E. maddness
r(t)}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return r.call(null,t)}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return r.call(this,t)}}}(t)}}// v8 likes predictible objects
function h(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||u||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}),r("1Ub1F");//# sourceMappingURL=trades-live.js.map

//# sourceMappingURL=trades-live.js.map
