importScripts('https://www.meganii.com/amp/rtv/012301261900000/sw/amp-sw.js');
AMP_SW.init({
  linkPrefetchOptions: {},
  assetCachingOptions: [
    {
      regexp: /\.(png|jpg|woff2|woff|css|js)/,
      cachingStrategy: 'CACHE_FIRST',
    },
  ],
  offlinePageOptions: {
    url: '/offline.html',
    assets: [],
  },
});