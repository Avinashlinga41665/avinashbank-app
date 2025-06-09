
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
    'index.csr.html': {size: 23698, hash: '19cd298a79b053de2701d945d1c916969530362c9edcef5c5d6045b3a679a51b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17272, hash: '46e7abc9573a3a9c81df78f5011fbeb03df72d11fddeaadf8dccd5875af1cf8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 24142, hash: '6ceceb7a362b87ed3a90be708e6265918624a940d7bb52d245a4622f9a5d9e88', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'Register/index.html': {size: 24599, hash: '7960e24423e2ae418a7f117cd50f3a498f9546d70ed1afc8c1ba9d06d087c975', text: () => import('./assets-chunks/Register_index_html.mjs').then(m => m.default)},
    'ForgotPassword/index.html': {size: 24480, hash: '26080155e99ed8585933b8bd1581df493baecd13079b21b2f977f1a8ceb260bb', text: () => import('./assets-chunks/ForgotPassword_index_html.mjs').then(m => m.default)},
    'AccountSummary/index.html': {size: 55137, hash: 'f4c85a7d8bc8e25ca8cdef3735f78dc26a26ee62d499d35a3d7457f8a5d38669', text: () => import('./assets-chunks/AccountSummary_index_html.mjs').then(m => m.default)},
    'index.html': {size: 25376, hash: 'd51d4e4ab99a30dfe822c1bf2352511e87e8d13f65afee7c3ef76bc5e9baa6b5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
