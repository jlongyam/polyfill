var polyfill = {};
polyfill.path = "./";
if (typeof Object.defineProperty !== 'function') require(polyfill.path + 'js/Object/defineProperty.js');
if (!('keys' in Object)) require(polyfill.path + 'js/Object/keys.js');
if (!('map' in Array.prototype)) require(polyfill.path + 'js/Array/map.js');
if (!('indexOf' in Array.prototype)) require(polyfill.path + 'js/Array/indexOf.js');
if (!('includes' in Array.prototype)) require(polyfill.path + 'js/Array/includes.js')
if (!('includes' in String.prototype)) require(polyfill.path + 'js/String/includes.js');
if (typeof JSON !== 'object') require(polyfill.path + 'js/type/JSON.js');
if (typeof Promise !== 'function') require(polyfill.path + 'js/type/Promise.js');
if (typeof fetch !== 'function') require(polyfill.path + 'js/type/fetch.js');
if (typeof console !== 'object') require(polyfill.path + 'js/type/console.js');
