var polyfill = {};
polyfill.path = "./";
polyfill.require = {
  "Object.defineProperty": (!Object.defineProperty),
  "Object.JSON": (typeof JSON !== "object"),
  "Object.keys": (!Object.keys),
  "Object.defineProperties": (!Object.defineProperties),
  "Object.create": (!Object.create),
  "Object.getPrototypeOf": (!Object.getPrototypeOf),
  "Object.getOwnPropertyNames": (!Object.getOwnPropertyNames),
  "Array.indexOf": (!Array.prototype.indexOf),
  "Array.lastIndexOf": (!Array.prototype.lastIndexOf),
  "Array.isArray":  (typeof Array.isArray === 'undefined'),
  "Array.map": (!Array.prototype.map),
  "Array.filter": (!Array.prototype.filter),
  "Array.forEach": (!Array.prototype.forEach),
  "Array.reduce": (!Array.prototype.reduce),
  "Array.reduceRight": (!Array.prototype.reduceRight),
  "Array.every": (!Array.prototype.every),
  "Array.some": (!Array.prototype.some),
  "Array.includes": (!Array.prototype.includes),
  "String.trim": (!String.prototype.trim),
  "String.includes": (!String.prototype.includes),
  "Date.now": (!Date.now),
  "Date.toISOString": (!Date.prototype.toISOString),
  "Function.bind": (!Function.prototype.bind),
  "Function.Promise": (typeof Promise !== "function"),
  "Function.fetch": (typeof fetch !== 'function')
};
if(polyfill.require['Object.defineProperty']) require(polyfill.path + 'js/Object/defineProperty.js');
if(polyfill.require['Object.JSON']) require(polyfill.path + 'js/Object/JSON.js');
if(polyfill.require['Object.keys']) require(polyfill.path + 'js/Object/keys.js');
if(polyfill.require["Object.defineProperties"]) require(polyfill.path + 'js/Object/defineProperties.js');
if(polyfill.require["Object.create"]) require(polyfill.path + 'js/Object/create.js');
if(polyfill.require["Object.getPrototypeOf"]) require(polyfill.path + 'js/Object/getPrototypeOf.js');
if(polyfill.require["Object.getOwnPropertyNames"]) require(polyfill.path + 'js/Object/getOwnPropertyNames.js');
if(polyfill.require["Array.indexOf"]) require(polyfill.path + 'js/Array/indexOf.js');
if(polyfill.require["Array.lastIndexOf"]) require(polyfill.path + 'js/Array/lastIndexOf.js');
if(polyfill.require["Array.isArray"]) require(polyfill.path + 'js/Array/isArray.js');
if(polyfill.require["Array.map"]) require(polyfill.path + 'js/Array/map.js');
if(polyfill.require["Array.filter"]) require(polyfill.path + 'js/Array/filter.js');
if(polyfill.require["Array.forEach"]) require(polyfill.path + 'js/Array/forEach.js');
if(polyfill.require["Array.reduce"]) require(polyfill.path + 'js/Array/reduce.js');
if(polyfill.require["Array.reduceRight"]) require(polyfill.path + 'js/Array/reduceRight.js');
if(polyfill.require["Array.every"]) require(polyfill.path + 'js/Array/every.js');
if(polyfill.require["Array.some"]) require(polyfill.path + 'js/Array/some.js');
if(polyfill.require["Array.includes"]) require(polyfill.path + 'js/Array/includes.js');
if(polyfill.require["String.trim"]) require(polyfill.path + 'js/String/trim.js');
if(polyfill.require["String.includes"]) require(polyfill.path + 'js/String/includes.js');
if(polyfill.require["Date.now"]) require(polyfill.path + 'js/Date/now.js');
if(polyfill.require["Date.toISOString"]) require(polyfill.path + 'js/Date/toISOString.js');
if(polyfill.require["Function.bind"]) require(polyfill.path + 'js/Function/bind.js');
if(polyfill.require["Function.Promise"])  require(polyfill.path + 'js/Function/bluebird.min.js');
