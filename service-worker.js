"use strict";var precacheConfig=[["/hannasoderstrom.com-2018/index.html","f22731e032ca866ad22ce8d24afafb0e"],["/hannasoderstrom.com-2018/static/css/main.d50bca8e.css","7669db35d72e61b43558f20cafd60ba1"],["/hannasoderstrom.com-2018/static/js/0.a831d271.chunk.js","f6dee59a7b4fea3a1ea160b37b61f8b2"],["/hannasoderstrom.com-2018/static/js/1.12288bc5.chunk.js","d364830cd0aee14a90560127794e40c9"],["/hannasoderstrom.com-2018/static/js/2.c872a29d.chunk.js","dc1660535c5cc70bfc6270e1dc9b9d10"],["/hannasoderstrom.com-2018/static/js/3.b9b167f7.chunk.js","fa1a5fb079e0cb81019f088d33e3c564"],["/hannasoderstrom.com-2018/static/js/4.3fac80cb.chunk.js","045d819fc6ff30a2869df1f2c97c2e69"],["/hannasoderstrom.com-2018/static/js/5.756ef740.chunk.js","ef24cf896a03aed4144dd73072d56845"],["/hannasoderstrom.com-2018/static/js/main.88e20408.js","948f1cc8cb6f5a5b119fbca25db8682c"],["/hannasoderstrom.com-2018/static/media/adidas.6bfa63aa.png","6bfa63aae4541e95ff39d02a601d184d"],["/hannasoderstrom.com-2018/static/media/billylundevall.fb94ff20.png","fb94ff20ad88b22dd88c01e9d4d60058"],["/hannasoderstrom.com-2018/static/media/burgerking.7e4229c2.png","7e4229c2bf3a2971cd59451d40f24ffe"],["/hannasoderstrom.com-2018/static/media/captainmorgan.45262c6e.jpg","45262c6eaf17056086c89a71fad68e0d"],["/hannasoderstrom.com-2018/static/media/chrispoland.f3c7ba57.png","f3c7ba573cf28bcbdbc21950c7853a70"],["/hannasoderstrom.com-2018/static/media/ck.acc24eea.png","acc24eeada8b402ecef16555e3daaf6d"],["/hannasoderstrom.com-2018/static/media/cocacola.402a41c7.png","402a41c7a7fb4bfd4b3d8726aa7618f4"],["/hannasoderstrom.com-2018/static/media/computer_1000.b73af8ed.jpg","b73af8ed96a0fedbc777306e24d0de56"],["/hannasoderstrom.com-2018/static/media/computer_1500.038840b2.jpg","038840b295d86e01be0794ace31c871a"],["/hannasoderstrom.com-2018/static/media/computer_400.c8c216d3.jpg","c8c216d3fe647ed0018d3b46a5f67882"],["/hannasoderstrom.com-2018/static/media/css3.15678ffe.svg","15678ffe04860272db359a247ec7fc08"],["/hannasoderstrom.com-2018/static/media/danielkopp.c575de6a.png","c575de6adbd628e104e46251affb051d"],["/hannasoderstrom.com-2018/static/media/got.4ac818aa.png","4ac818aae95ecad48d752c1bf61b51ce"],["/hannasoderstrom.com-2018/static/media/hanna2018-300.46f67f7e.jpg","46f67f7e62875fcb6bd6934c81aede47"],["/hannasoderstrom.com-2018/static/media/hanna2018.bbb889ae.jpg","bbb889aebb7b38a5742626e773209193"],["/hannasoderstrom.com-2018/static/media/headandshoulders.efe68610.png","efe68610c9a1e6ed9811e71f639b119a"],["/hannasoderstrom.com-2018/static/media/html5.525f317f.svg","525f317fe9e90927edf7694d88ce42c8"],["/hannasoderstrom.com-2018/static/media/js.dd60b11e.svg","dd60b11e9762b6e25f6d4ce981a1eeae"],["/hannasoderstrom.com-2018/static/media/kristina.076a54c7.jpg","076a54c7c457ef5d68cb850970a8a7c6"],["/hannasoderstrom.com-2018/static/media/menu-comments.21e27de4.svg","21e27de45e219ffd67fa83d52ee19e91"],["/hannasoderstrom.com-2018/static/media/mercedes.7ba42f0a.png","7ba42f0a8b3f7ea0f2b71bc70bec47b7"],["/hannasoderstrom.com-2018/static/media/more-about-me.77bb6549.svg","77bb6549960dcae7e5667a865af0c5dd"],["/hannasoderstrom.com-2018/static/media/msf.82bc9ab5.png","82bc9ab535fa667b9e6a9e9b756b8cd1"],["/hannasoderstrom.com-2018/static/media/pepsi.bf1031ca.png","bf1031ca846109c2056d7a0b19cfda66"],["/hannasoderstrom.com-2018/static/media/rde.ebed3ac0.png","ebed3ac05e3f96460f8c34c56777b244"],["/hannasoderstrom.com-2018/static/media/starfucked.3fd30985.png","3fd309859a312be8602b7962313c521f"],["/hannasoderstrom.com-2018/static/media/theres-more.4fdcc72b.svg","4fdcc72bedfb0a31d986517555a4eb51"],["/hannasoderstrom.com-2018/static/media/vue.9a45fc76.svg","9a45fc7689867939804c469bfcd17784"],["/hannasoderstrom.com-2018/static/media/widespace.788a05a9.png","788a05a9c821f0715ece6673ae1a4f3a"],["/hannasoderstrom.com-2018/static/media/wordpress.f369b005.svg","f369b0052be56138d3ede4d21e674a07"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/hannasoderstrom.com-2018/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});