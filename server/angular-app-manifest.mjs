
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/avinashbank-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/avinashbank-app"
  },
  {
    "renderMode": 2,
    "route": "/avinashbank-app/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/avinashbank-app/Register"
  },
  {
    "renderMode": 2,
    "route": "/avinashbank-app/AccountSummary"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23592, hash: '9bf854c9a995845db0280975dff631bd61afdf71b027ce12a61636591d32c60e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17166, hash: 'c86ee0808c17dcde77115e6fb426ad546294dc49eb2ee9671f09dd0d3a6f7680', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 24036, hash: '1a3890e9fa7a97536eef955f8e5eaff30579bd128441c959d2a46583de54f846', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'Register/index.html': {size: 24493, hash: 'da9c2957bc704261fc47d2270f08b2cb597bc94c6baef783167ec58d4b0eee44', text: () => import('./assets-chunks/Register_index_html.mjs').then(m => m.default)},
    'AccountSummary/index.html': {size: 53748, hash: '940de3eb11a815351dc5319a297073963c905dca474974b3cb850ba10107cf7d', text: () => import('./assets-chunks/AccountSummary_index_html.mjs').then(m => m.default)},
    'index.html': {size: 25194, hash: 'ca9902747145b0e22d9eb34c0fa261e996f8249d1cf483512081185dc8c3759c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
