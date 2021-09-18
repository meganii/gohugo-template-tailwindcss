importScripts('https://cdn.ampproject.org/sw/amp-sw.js');
AMP_SW.init({
   linkPrefetchOptions: {
     maxAgeSecondsInCache: 1000
  } ,
  offlinePageOptions: {
    url: '/offline.html',
    assets: [],
  },
});