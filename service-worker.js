/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5763d8fb3ff9b97119b80f0b2d069135"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "099d79d6e7f35ec92fd22906f1697877"
  },
  {
    "url": "android-chrome-256x256.png",
    "revision": "dbb81313d37fbf9097fbc2377745f332"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "f29cd2e3c28b584871ef0b62df058e9a"
  },
  {
    "url": "assets/css/0.styles.9e3e49da.css",
    "revision": "e8d9f784d9935077f85c61356eed517e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.af668129.js",
    "revision": "8f5b30d6e91e0659d222ba12fb97fd58"
  },
  {
    "url": "assets/js/11.83033834.js",
    "revision": "b53334d0ac753d65c9766b5371343dac"
  },
  {
    "url": "assets/js/12.62590eaa.js",
    "revision": "d41e6f17e3b90fa568fc2fc70bd7d641"
  },
  {
    "url": "assets/js/2.34b8d04d.js",
    "revision": "5646da02500bfb0b8933c60311e32873"
  },
  {
    "url": "assets/js/3.0c8e6bb0.js",
    "revision": "90fbddaaf63de691757b99f06699a302"
  },
  {
    "url": "assets/js/4.c7d053fb.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.ef3b7d07.js",
    "revision": "3fff7e3f23fa53353616457dc5f5de01"
  },
  {
    "url": "assets/js/6.0247659c.js",
    "revision": "1addbbaa1dce944568ea527c8be644cc"
  },
  {
    "url": "assets/js/7.be709ddf.js",
    "revision": "d1806d993dc526fb65bfc92336e82ba0"
  },
  {
    "url": "assets/js/8.80db13b9.js",
    "revision": "575022889e1d5d3a116d3453b54cb577"
  },
  {
    "url": "assets/js/9.6c740e01.js",
    "revision": "3fe8cf2a155142cf66ab7d94ebc591f2"
  },
  {
    "url": "assets/js/app.3d333892.js",
    "revision": "42ef2e0efd4e054b85350bf99dd93d96"
  },
  {
    "url": "config.html",
    "revision": "c861687afc62505a5b1db9c62c5b966f"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "33126277a961cee22cc1626694b924a7"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bc9c8d396e4feda1ac963d20b197418d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "10c74d86c73fe7e2bf87f9d2141123e8"
  },
  {
    "url": "guide/index.html",
    "revision": "baaeea14d9507520e10321f1c7e19078"
  },
  {
    "url": "index.html",
    "revision": "d2e22c8e5fff86b690779c9a653a8bdc"
  },
  {
    "url": "max-syksy.png",
    "revision": "ebc294d8b88f613ffc48c2f03d428047"
  },
  {
    "url": "min-syksy.png",
    "revision": "43ae8be6b7cad2f80b19edb54e7b0b5c"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "215a9ed310a393045298c01aea8ff985"
  },
  {
    "url": "v1/index.html",
    "revision": "81ded999f9649c5e4764e55694bf8340"
  },
  {
    "url": "v1/one.html",
    "revision": "03a53b790bd961b9aa2c20ddcf759571"
  },
  {
    "url": "v1/two.html",
    "revision": "1812d2684111fe285b65fa471cbda8b9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
