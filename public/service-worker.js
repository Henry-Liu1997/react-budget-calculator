const static_files = [
  '/',
  'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  '/manifest.json',
  '/logo192.png',
  '/favicon.ico',
];

const static_cache = 'static_cache';

//eslint-disable-next-line
self.oninstall = (e) => {
  e.waitUntil(
    caches
      .open(static_cache)
      .then((cache) => cache.addAll(static_files))
      //eslint-disable-next-line
      .then(() => self.skipWaiting())
  );
};

//eslint-disable-next-line
self.onactivate = (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keylist) =>
        Promise.all(
          //eslint-disable-next-line
          keylist.map((key) => {
            if (key !== static_cache) {
              return caches.delete(key);
            }
          })
        )
      ) //eslint-disable-next-line
      .then(() => clients.claim())
  );
};

//eslint-disable-next-line
self.onfetch = (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        console.log('Found response in cache:', res);

        return res;
      }

      console.log('No response found in cache');

      return fetch(e.request)
        .then((res) => {
          console.log('Response from network is:', res);

          return res;
        })
        .catch((err) => {
          console.error('fetch failed', err);
          throw err;
        });
    })
  );
};
