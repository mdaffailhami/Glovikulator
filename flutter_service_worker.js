'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "106fa3f1ac86fbf10b0a9359c9ce0ef7",
".git/config": "077888c457a1edf16163ad0fb4cdb11c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c66879b716ed40ae37a4000266ed6f9e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "95140f5cdddc5f80c9baef29af44a935",
".git/logs/refs/heads/master": "95140f5cdddc5f80c9baef29af44a935",
".git/logs/refs/remotes/origin/web": "7342bc03c337ce03d905e65bb5106116",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/200fa750479a2fa4b63e5f917e146e53dd94ed": "caf2cbe5a4de3b71fbff880091e82ecc",
".git/objects/1f/80d7b2eeee8deac44de9a4fd554daa18d0b17b": "0ae7600c744ec684af8f5c88b9c57a2f",
".git/objects/2d/b7da6f9c50de72657c2e44ff1c5af6a648fc47": "889489f68fb8b4124c4d33970243c0a4",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/39/27e25abb1febcb9e92e215cd0175a3827b253e": "ca3d8fcc27d8fbf1729ccb2c5a6f8a77",
".git/objects/39/d4651a898eddbacf6056281794002f947e269b": "abb30b51f3fc2cbb5558f2f40e526953",
".git/objects/3c/99ce5bdc1caa2db16f8cee1ff6fa5af5093473": "aa43b3dd72dd7d600efe440ef22af8e3",
".git/objects/3f/d90ac8b30526b2748d82e86ac0a1a467bcd64a": "a568757b44e5c40991bc12c284ef8f14",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/56/6e262b9760fa39177fdcc1a34b0c8acb8a6fa4": "5225737a6e8db184ca198f3bbff8e364",
".git/objects/5b/4b29bdda8fc3f669f344784a18d0140d412f44": "edf7dd7cb10e4166b8731027e89b3a36",
".git/objects/60/47358586caba6299fc8562be40d8549dc8269c": "55f78d392623ddb78827c79dbea05236",
".git/objects/60/ae2353d67ca1ea8d8bf81052f14451aab2f450": "559bc0d32985aedb7bab9dd2bd4fc1a8",
".git/objects/64/23e675b0d066a0e2fe39da06f006d2e16f39b9": "5191891454a44cca3e39a74085ec2a35",
".git/objects/76/157e2f5f929ef4caa7278c719684f93d2c50d1": "f5148a4a4299277c81f0cc629fd740bf",
".git/objects/78/d095d3b5ae187a0bd31cc638b0894248eb7c1f": "735862234cc971ae67f6cce6d5521676",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/0caaf2cdc50e98317bc5b4666dc55c9d7bc7f5": "3bcec7d46a6e768449bfbca368f37b87",
".git/objects/87/ee972543c1cf146a3ba4e0126c1c079c73af46": "6b6ad0a0ce78adbcb708be62c17bce20",
".git/objects/8c/4ef5eb73376b446ceebd024a09d02ed23db94c": "d327b3206a9ba91a4ed077b4a9a96e2b",
".git/objects/94/408612177105da42b599fa4030346da5b6709a": "14dc6d5e942ef891bb0591a9bbd96ba2",
".git/objects/99/af36c741962bc896eb30490642a8afba7ab227": "1011b53c5882ba0762bdeb8d8b3a706d",
".git/objects/9b/4f8df950394777406686b4b091e06ead167359": "88223d302ee5a3738da89b823f7a92b0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/90c63f194c4aed928fe24bec46581ac280a331": "f0d13e6f8cc74c9fd6256240b4081e28",
".git/objects/b8/5e7d502e77b4872434e92abc0d23e63842aa4f": "7d3986cd3ed431aba41e4891472f09f3",
".git/objects/c0/a4d054000efe4ec69a7dde68c9985d3e8396d1": "64e0434e02dac74da49f68116ca69375",
".git/objects/cc/443bba7cea00e335a0617b53fa45e2e8a438ac": "93c0fadefd133c9a2daa5fc8ac9df11f",
".git/objects/d4/8d2df9df0237f215219be9904dad0eba9640ed": "dc8ba7167e91e4219940a2d8c478e846",
".git/objects/d6/e07996b2585d02613eebba867a29bbbc6b646b": "b37d2514525e97dd2255c61c36664c57",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/372bd96c815bf9a2445805dcf775bb04b65631": "00ebf8a759930c0cf91c9ab360d2c65b",
".git/objects/f1/14d689f14fa0bc07113a2e8e8f41903642ac26": "6cdd18bfdf1571e9958588e1c8993c22",
".git/objects/f1/f9b20a386841a92caa9340a1048007dc3fdfea": "4efa9a2111199984a121c1d78cc2a334",
".git/objects/f6/94bb5928289b8c24792b089985bc55af9c174a": "0c07ceb20964da79097dbe6f41f1a23f",
".git/objects/f7/08d581259c70dcfea04f7acad5aeba02e6537e": "7b0e08918c8deac6a31c68dbda06f8a0",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/refs/heads/master": "1c1c4dd0116585008ddddcb36d810cbd",
".git/refs/remotes/origin/web": "1c1c4dd0116585008ddddcb36d810cbd",
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
"index.html": "393c9787c8eeb3a6b643cf0c19896f18",
"/": "393c9787c8eeb3a6b643cf0c19896f18",
"main.dart.js": "37e0b2bd81ccc1bf6970b5ba178d005a",
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
