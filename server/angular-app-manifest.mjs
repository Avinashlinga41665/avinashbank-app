
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://avinashlinga41665.github.io/avinashbank-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/Register"
  },
  {
    "renderMode": 2,
    "route": "/AccountSummary"
  },
  {
    "renderMode": 2,
    "route": "/ForgotPassword"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23698, hash: '5af820ee3433656527394d02d3d757462ba386cbae2c56bb6a8c395abb01d486', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17272, hash: '4b9328b06dde36449bcec8f3a95e4a2e829441a53cf149aa63eae8672300e8b6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 24000, hash: 'e6604ea1bb8829ac5e483c27e8429d078724b023bfd07f04c132f62135f561f1', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'Register/index.html': {size: 24457, hash: '2d2abe1ab3b897ecc08df1d0b14b065ddeb785ef1047ad77ab53b65196c55b3c', text: () => import('./assets-chunks/Register_index_html.mjs').then(m => m.default)},
    'ForgotPassword/index.html': {size: 24338, hash: '3f27366a9496513446a5e0de8338ca001c979cdc646648d62757de2c8a2cc865', text: () => import('./assets-chunks/ForgotPassword_index_html.mjs').then(m => m.default)},
    'AccountSummary/index.html': {size: 53914, hash: 'a62c5d3547a8b8a91a79a788e0f84e68a64a6c7c9f1fde06747c96514db78b83', text: () => import('./assets-chunks/AccountSummary_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80519, hash: 'afbc3d44ac9ed5fbe7792de5b36dc40efad2275e5f3b85a0136352dafed8b803', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
