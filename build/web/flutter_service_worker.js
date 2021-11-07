'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "ba4147455e3b00ce13ee6f69e455b5db",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "b2a8468ec9071ae536a5652c4d07af17",
"icons/android-icon-144x144.png": "1bf5de337e40ae1ece72647e48210c63",
"icons/android-icon-192x192.png": "85806e38f705c402a511b18082962c5a",
"icons/android-icon-36x36.png": "dcbb69072b09ea484872c6e9eecbc5f9",
"icons/android-icon-48x48.png": "5b92de3a4cce5082e11b2480e0a421cc",
"icons/android-icon-72x72.png": "493f5a7906f00ee1ae648edb517dae3e",
"icons/android-icon-96x96.png": "178416b912e91eb6a03190b639715a28",
"icons/apple-icon-114x114.png": "db998df972fccf53c2cdf829da1e5eb0",
"icons/apple-icon-120x120.png": "c6e57a68227c6523c5fa4a4dcff038a9",
"icons/apple-icon-144x144.png": "1bf5de337e40ae1ece72647e48210c63",
"icons/apple-icon-152x152.png": "9bf2cc5da9b9659ebd3622f2d58ce62e",
"icons/apple-icon-180x180.png": "c83fffef221cfed321e3fa7dbebcc2d1",
"icons/apple-icon-57x57.png": "52598ed1ff0486a1747fd7edfc58d08a",
"icons/apple-icon-60x60.png": "ec145629b712b028556a682dbc687ee0",
"icons/apple-icon-72x72.png": "493f5a7906f00ee1ae648edb517dae3e",
"icons/apple-icon-76x76.png": "cbfcfa882ac5bbd86d4bdd8fa6a1b442",
"icons/apple-icon-precomposed.png": "dd9f2b5c4c1f81a949b0adafbaaf5d3f",
"icons/apple-icon.png": "dd9f2b5c4c1f81a949b0adafbaaf5d3f",
"icons/favicon-16x16.png": "0fa31a1ddcd2557747e88d5386033c4f",
"icons/favicon-32x32.png": "e5f60a4a610f8fb8ef8dc18de9bce3b8",
"icons/favicon-96x96.png": "178416b912e91eb6a03190b639715a28",
"icons/ms-icon-144x144.png": "1bf5de337e40ae1ece72647e48210c63",
"icons/ms-icon-150x150.png": "ada05132bf07905b1355c3f7b0d7564c",
"icons/ms-icon-310x310.png": "4ff8ab96ff6818c19906ef3d7cdab8e5",
"icons/ms-icon-70x70.png": "1d43d36ae3d3a671f2f7c65070aecdbf",
"index.html": "aa525c7d9f05b057e8b2c70a877359ca",
"/": "aa525c7d9f05b057e8b2c70a877359ca",
"main.dart.js": "66cf1e15eac8de257e0259fb946860a2",
"manifest.json": "5304c20da999e1681432372423fbc607",
"style.css": "d57165e09222c297f1a3b6e5af4dcc46",
"version.json": "b3a803d6d33627f160c04e9802118ec0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
