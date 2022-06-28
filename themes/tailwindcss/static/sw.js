importScripts('https://cdn.ampproject.org/sw/amp-sw.js');
AMP_SW.init({
  linkPrefetchOptions: {},
  offlinePageOptions: {
    url: '/offline.html',
    assets: [],
  },
});