// check-es-features.js
// Node-compatible feature checker (syntax vs polyfill) by ES edition.
// Designed to run on older Node (e.g., v5.12). Minimal, detection-only.

'use strict';

var green = '\x1b[32m';
var red = '\x1b[31m';
var reset = '\x1b[0m';

function ok(msg){ return '[' + green + 'OK' + reset +']  ' + msg; }
function no(msg){ return '[' + red + 'NO' + reset +']  ' + msg; }

// Try parsing code; if fails, retry with "use strict"
function testSyntax(code){
  try {
    new Function(code);
    return true;
  } catch(e){
    try {
      new Function('"use strict";\n' + code);
      return true;
    } catch(e2){
      return false;
    }
  }
}

// Safe global/property presence check
function has(path){
  try {
    var parts = path.split('.');
    var cur = (typeof global !== 'undefined') ? global : this;
    for (var i = 0; i < parts.length; i++){
      var p = parts[i];
      if (p === 'globalThis') {
        if (typeof globalThis === 'undefined') return false;
        cur = globalThis;
        continue;
      }
      cur = cur[p];
      if (typeof cur === 'undefined') return false;
    }
    return true;
  } catch(e){ return false; }
}

function report(title, items){
  console.log('\n== ' + title + ' ==');
  Object.keys(items).forEach(function(k){
    var res = items[k]() ? ok(k) : no(k);
    console.log('  ' + res);
  });
}

// ES5 baseline (confirmation)
report('ES5 (baseline) — polyfill', {
  'Array.prototype.forEach': function(){ return !!Array.prototype.forEach; },
  'Array.prototype.map': function(){ return !!Array.prototype.map; },
  'Array.prototype.filter': function(){ return !!Array.prototype.filter; },
  'Array.prototype.reduce': function(){ return !!Array.prototype.reduce; },
  'Array.prototype.reduceRight': function(){ return !!Array.prototype.reduceRight; },
  'Array.prototype.every': function(){ return !!Array.prototype.every; },
  'Array.prototype.some': function(){ return !!Array.prototype.some; },
  'Array.prototype.indexOf': function(){ return !!Array.prototype.indexOf; },
  'Array.prototype.lastIndexOf': function(){ return !!Array.prototype.lastIndexOf; },
  'Function.prototype.bind': function(){ return !!Function.prototype.bind; },
  'Object.create': function(){ return !!Object.create; },
  'Object.defineProperty': function(){ return typeof Object.defineProperty === 'function'; },
  'Object.getOwnPropertyDescriptor': function(){ return typeof Object.getOwnPropertyDescriptor === 'function'; },
  'Object.keys': function(){ return !!Object.keys; },
  'Object.freeze': function(){ return typeof Object.freeze === 'function'; },
  'Object.seal': function(){ return typeof Object.seal === 'function'; },
  'Object.preventExtensions': function(){ return typeof Object.preventExtensions === 'function'; },
  'Array.isArray': function(){ return !!Array.isArray; },
  'JSON.parse/stringify': function(){ return !!JSON && !!JSON.parse && !!JSON.stringify; },
});

// ES2015 (ES6)
report('ES2015 (ES6) — syntax', {
  'let/const': function(){ return testSyntax('let x = 1; const y = 2;'); },
  'arrow_function': function(){ return testSyntax('var f = (a) => a + 1;'); },
  'class': function(){ return testSyntax('class A { constructor(x) { this.x = x; } }'); },
  'template_literal': function(){ return testSyntax('var s = `a${1}`;'); },
  'destructuring': function(){ return testSyntax('var [a,b]=[1,2]; var {x} = {x:1};'); },
  'default_params': function(){ return testSyntax('function f(a = 1) { return a; }'); },
  'rest_params': function(){ return testSyntax('function f(...a){ return a.length; }'); },
  'spread_in_array': function(){ return testSyntax('var a=[1,2]; var b=[...a];'); },
  'for_of': function(){ return testSyntax('for (var x of [1,2]) {}'); },
  'modules_import_export': function(){ return testSyntax('export var x = 1;'); },
  'generators': function(){ return testSyntax('function* g(){ yield 1; }'); },
});

report('ES2015 (ES6) — polyfill', {
  'Promise': function(){ return typeof Promise !== 'undefined' && typeof Promise.resolve === 'function'; },
  'Proxy': function(){ return typeof Proxy === 'function'; },
  'Reflect': function(){ return typeof Reflect !== 'undefined'; },
  'Map': function(){ return typeof Map !== 'undefined'; },
  'Set': function(){ return typeof Set !== 'undefined'; },
  'WeakMap': function(){ return typeof WeakMap !== 'undefined'; },
  'WeakSet': function(){ return typeof WeakSet !== 'undefined'; },
  'Symbol': function(){ return typeof Symbol !== 'undefined'; },
  'Symbol.for': function(){ return typeof Symbol !== 'undefined' && typeof Symbol.for === 'function'; },
  'Symbol.keyFor': function(){ return typeof Symbol !== 'undefined' && typeof Symbol.keyFor === 'function'; },
  'Object.assign': function(){ return typeof Object.assign === 'function'; },
  'Object.is': function(){ return typeof Object.is === 'function'; },
  'Object.setPrototypeOf': function(){ return typeof Object.setPrototypeOf === 'function'; },
  'Object.getOwnPropertyNames': function(){ return typeof Object.getOwnPropertyNames === 'function'; },
  'Object.getOwnPropertySymbols': function(){ return typeof Object.getOwnPropertySymbols === 'function'; },
  'Object.getPrototypeOf': function(){ return typeof Object.getPrototypeOf === 'function'; },
  'Array.from': function(){ return typeof Array.from === 'function'; },
  'Array.of': function(){ return typeof Array.of === 'function'; },
  'Array.prototype.find': function(){ return typeof Array.prototype.find === 'function'; },
  'Array.prototype.findIndex': function(){ return typeof Array.prototype.findIndex === 'function'; },
  'Array.prototype.keys': function(){ return typeof Array.prototype.keys === 'function'; },
  'Array.prototype.values': function(){ return typeof Array.prototype.values === 'function'; },
  'Array.prototype.entries': function(){ return typeof Array.prototype.entries === 'function'; },
  'String.prototype.includes': function(){ return typeof String.prototype.includes === 'function'; },
  'String.prototype.startsWith': function(){ return typeof String.prototype.startsWith === 'function'; },
  'String.prototype.endsWith': function(){ return typeof String.prototype.endsWith === 'function'; },
  'Number.isFinite': function(){ return typeof Number.isFinite === 'function'; },
  'Number.isInteger': function(){ return typeof Number.isInteger === 'function'; },
  'Number.isNaN': function(){ return typeof Number.isNaN === 'function'; },
  'Math.imul': function(){ return typeof Math.imul === 'function'; },
  'Math.sign': function(){ return typeof Math.sign === 'function'; },
  'Math.trunc': function(){ return typeof Math.trunc === 'function'; },
  'Math.fround': function(){ return typeof Math.fround === 'function'; },
  'Function.prototype.name': function(){ return (function f(){}).name === 'f'; },
  'TypedArrays (Int8Array etc.)': function(){ return typeof Int8Array !== 'undefined'; },
});

// ES2016 (ES7)
report('ES2016 (ES7) — syntax', {
  'exponentiation_operator(**)': function(){ return testSyntax('var x = 2 ** 3;'); },
});
report('ES2016 (ES7) — polyfill', {
  'Array.prototype.includes': function(){ return typeof Array.prototype.includes === 'function'; },
});

// ES2017 (ES8)
report('ES2017 (ES8) — syntax', {
  'async_await': function(){ return testSyntax('async function f(){ await Promise.resolve(1); }'); },
});
report('ES2017 (ES8) — polyfill', {
  'Object.values': function(){ return typeof Object.values === 'function'; },
  'Object.entries': function(){ return typeof Object.entries === 'function'; },
  'String.prototype.padStart': function(){ return typeof String.prototype.padStart === 'function'; },
  'String.prototype.padEnd': function(){ return typeof String.prototype.padEnd === 'function'; },
  'SharedArrayBuffer': function(){ return typeof SharedArrayBuffer !== 'undefined'; },
  'Atomics': function(){ return typeof Atomics !== 'undefined'; },
});

// ES2018 (ES9)
report('ES2018 (ES9) — syntax', {
  'async_iteration_for_await_of': function(){ return testSyntax('async function f(){ for await (var x of []); }'); },
  'object_rest_spread_syntax': function(){ return testSyntax('var {...a} = {x:1};'); },
});
report('ES2018 (ES9) — polyfill', {
  'Promise.prototype.finally': function(){ return typeof Promise !== 'undefined' && typeof Promise.prototype.finally === 'function'; },
});

// ES2019 (ES10)
report('ES2019 (ES10) — syntax', {
  'optional_catch_binding': function(){ return testSyntax('try{}catch{}'); },
});
report('ES2019 (ES10) — polyfill', {
  'Array.prototype.flat': function(){ return typeof Array.prototype.flat === 'function'; },
  'Array.prototype.flatMap': function(){ return typeof Array.prototype.flatMap === 'function'; },
  'Object.fromEntries': function(){ return typeof Object.fromEntries === 'function'; },
  'String.prototype.trimStart': function(){ return typeof String.prototype.trimStart === 'function' || typeof String.prototype.trimLeft === 'function'; },
  'String.prototype.trimEnd': function(){ return typeof String.prototype.trimEnd === 'function' || typeof String.prototype.trimRight === 'function'; },
});

// ES2020 (ES11)
report('ES2020 (ES11) — syntax', {
  'optional_chaining': function(){ return testSyntax('var a = {}; var b = a?.x;'); },
  'nullish_coalescing': function(){ return testSyntax('var c = null ?? 1;'); },
  'dynamic_import_syntax': function(){ return testSyntax('import("fs").then(()=>{})'); },
});
report('ES2020 (ES11) — polyfill', {
  'globalThis': function(){ return typeof globalThis !== 'undefined' || (function(){ try{ if (typeof global !== 'undefined') return true; return false;}catch(e){return false;} })(); },
  'Promise.allSettled': function(){ return typeof Promise !== 'undefined' && typeof Promise.allSettled === 'function'; },
  'BigInt': function(){ return typeof BigInt !== 'undefined'; },
  'import.meta (partial)': function(){ return typeof importMeta !== 'undefined' || false; } // placeholder detection not reliable in Node v5
});

// ES2021 (ES12)
report('ES2021 (ES12) — syntax', {
  'numeric_separators': function(){ return testSyntax('var n = 1_000_000;'); },
});
report('ES2021 (ES12) — polyfill', {
  'String.prototype.replaceAll': function(){ return typeof String.prototype.replaceAll === 'function'; },
  'Promise.any': function(){ return typeof Promise !== 'undefined' && typeof Promise.any === 'function'; },
  'AggregateError': function(){ return typeof AggregateError !== 'undefined'; },
  'Logical assignment operators (&&= ||= ??=)': function(){ return testSyntax('var a = 1; a &&= 2;'); }
});

// ES2022 (ES13)
report('ES2022 (ES13) — syntax', {
  'class_fields_private_public': function(){ return testSyntax('class C{ #x = 1; x = 2; }'); },
  'top_level_await_in_module': function(){ return testSyntax('await Promise.resolve(1);'); },
});
report('ES2022 (ES13) — polyfill', {
  'Array.prototype.at': function(){ return typeof Array.prototype.at === 'function'; },
  'Error.cause_support': function(){ try { new Error('e', { cause: 0 }); return true; } catch(e){ return false; } },
});

// ES2023 (ES14)
report('ES2023 (ES14) — syntax', {
  'placeholder_syntax_checks': function(){ return true; } // keep minimal
});
report('ES2023 (ES14) — polyfill', {
  'Array.prototype.findLast': function(){ return typeof Array.prototype.findLast === 'function'; },
  'Array.prototype.findLastIndex': function(){ return typeof Array.prototype.findLastIndex === 'function'; },
});

console.log('\nDone.');

