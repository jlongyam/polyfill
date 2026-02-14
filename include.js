var polyfill = {};
polyfill.path = "./";
polyfill.require = {
  "document.head": (!document.head),
  "Object.defineProperty": (!Object.defineProperty),
  "document.currentScript": (!document.currentScript),
  "window.console": (!window.console),
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
if(polyfill.require["document.head"]) document.write('<script src="' + polyfill.path + 'html/document/head.js"><\/script>');
if(polyfill.require['Object.defineProperty']) document.write('<script src="' + polyfill.path + 'js/Object/defineProperty.js"><\/script>');
if(polyfill.require["document.currentScript"]) document.write('<script src="' + polyfill.path + 'html/document/currentScript.js"><\/script>');
if(polyfill.require['window.console']) document.write('<script src="' + polyfill.path + 'html/window/console.js"><\/script>');
if(polyfill.require['Object.JSON']) document.write('<script src="' + polyfill.path + 'js/Object/JSON.js"><\/script>');
if(polyfill.require['Object.keys']) document.write('<script src="' + polyfill.path + 'js/Object/keys.js"><\/script>');
if(polyfill.require["Object.defineProperties"]) document.write('<script src="' + polyfill.path + 'js/Object/defineProperties.js"><\/script>');
if(polyfill.require["Object.create"]) document.write('<script src="' + polyfill.path + 'js/Object/create.js"><\/script>');
if(polyfill.require["Object.getPrototypeOf"]) document.write('<script src="' + polyfill.path + 'js/Object/getPrototypeOf.js"><\/script>');
if(polyfill.require["Object.getOwnPropertyNames"]) document.write('<script src="' + polyfill.path + 'js/Object/getOwnPropertyNames.js"><\/script>');
if(polyfill.require["Array.indexOf"]) document.write('<script src="' + polyfill.path + 'js/Array/indexOf.js"><\/script>');
if(polyfill.require["Array.lastIndexOf"]) document.write('<script src="' + polyfill.path + 'js/Array/lastIndexOf.js"><\/script>');
if(polyfill.require["Array.isArray"]) document.write('<script src="' + polyfill.path + 'js/Array/isArray.js"><\/script>');
if(polyfill.require["Array.map"]) document.write('<script src="' + polyfill.path + 'js/Array/map.js"><\/script>');
if(polyfill.require["Array.filter"]) document.write('<script src="' + polyfill.path + 'js/Array/filter.js"><\/script>');
if(polyfill.require["Array.forEach"]) document.write('<script src="' + polyfill.path + 'js/Array/forEach.js"><\/script>');
if(polyfill.require["Array.reduce"]) document.write('<script src="' + polyfill.path + 'js/Array/reduce.js"><\/script>');
if(polyfill.require["Array.reduceRight"]) document.write('<script src="' + polyfill.path + 'js/Array/reduceRight.js"><\/script>');
if(polyfill.require["Array.every"]) document.write('<script src="' + polyfill.path + 'js/Array/every.js"><\/script>');
if(polyfill.require["Array.some"]) document.write('<script src="' + polyfill.path + 'js/Array/some.js"><\/script>');
if(polyfill.require["Array.includes"]) document.write('<script src="' + polyfill.path + 'js/Array/includes.js"><\/script>');
if(polyfill.require["String.trim"]) document.write('<script src="' + polyfill.path + 'js/String/trim.js"><\/script>');
if(polyfill.require["String.includes"]) document.write('<script src="' + polyfill.path + 'js/String/includes.js"><\/script>');
if(polyfill.require["Date.now"]) document.write('<script src="' + polyfill.path + 'js/Date/now.js"><\/script>');
if(polyfill.require["Date.toISOString"]) document.write('<script src="' + polyfill.path + 'js/Date/toISOString.js"><\/script>');
if(polyfill.require["Function.bind"]) document.write('<script src="' + polyfill.path + 'js/Function/bind.js"><\/script>');
if(polyfill.require["Function.Promise"])  document.write('<script src="' + polyfill.path + 'js/Function/bluebird.min.js"><\/script>');
if(polyfill.require['Function.fetch']) document.write('<script src="' + polyfill.path + 'js/Function/fetch.umd.js"><\/script>');
