"use strict"

var polyfill = require("./polyfill.cjs");

console.log('===== Include: =====')

for(var i in polyfill.require) {
  console.log('* '+i, (polyfill.require[i] ? ' [\x1b[31myes\x1b[0m]': ' [no]'))
}
