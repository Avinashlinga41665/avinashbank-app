
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
    'index.csr.html': {size: 23698, hash: '2f545d52f3a498c556696fb9c1c44c9fec7fb1de8a3c6e4745bbfafaa951b02a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17272, hash: 'ab50d2017ccb3d8fa9da7aa9f10c800dab2bab709ec6ac04c2f466900a9d619b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Register/index.html': {size: 24599, hash: 'd835994c18661ede24261835c8badf05410315831ffb08477c7487dbc72d2102', text: () => import('./assets-chunks/Register_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 24142, hash: '70713e49e8007c3226703b2ccc70d3f6dc88dea60eeefe41ce9843038bd21503', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'ForgotPassword/index.html': {size: 24480, hash: '1a9c9e44fa9fedffee990aa53dfb274807933a383e62591e236b7467c34750ec', text: () => import('./assets-chunks/ForgotPassword_index_html.mjs').then(m => m.default)},
    'index.html': {size: 25376, hash: '2153f20935d55d3449d3a863d8cca8dd1fc758cbd6ecbfbc9fbccd40f3611c8e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'AccountSummary/index.html': {size: 55013, hash: 'a4037d9ca4c7e8d9d8cef190c63a1bdaa145ba6ec482e247e0375f0d7a3fd1a4', text: () => import('./assets-chunks/AccountSummary_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
