
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/avinashbank-app/',
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
    'index.csr.html': {size: 23698, hash: '73f0805e082f60b601f6a909d8c312e1bfb242acc0ee007ada873ee824b8a0d2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17272, hash: '1e8f92f09f56deb5cd5c33dd824218fa3d178000817114348bb82d92297a7bd1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 24000, hash: '869fc60af3688e046a4f6df0a070070a1a88e0cb28e1c04b9bfc545ce51c758c', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'ForgotPassword/index.html': {size: 24338, hash: '167fe745857c036e6155ed5a1af90e35db06b3b1dcf3de26045a2ba1fd564eb1', text: () => import('./assets-chunks/ForgotPassword_index_html.mjs').then(m => m.default)},
    'Register/index.html': {size: 25005, hash: '6c00f967e2152d5a0da0b0a0917c13d7d4542788684d34c12f3500d38046e35f', text: () => import('./assets-chunks/Register_index_html.mjs').then(m => m.default)},
    'AccountSummary/index.html': {size: 53914, hash: '5fd0d69d3c84f15d8d52a3f7cc9cf5284c23f71cc9e670eb6f20d10337fd7ba8', text: () => import('./assets-chunks/AccountSummary_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80519, hash: 'cb276f8484227d4c3002c646733dedade10b0aa8e6c0a7522966d6999974b3de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
