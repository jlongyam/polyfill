'use strict'

var ok = '[<span style="color: green"><b>OK</b></span>] '
var no = '[<span style="color: red"><b>NO</b></span>] '
var checker = [
  '<b>ES5</b>',
  ('getPrototypeOf' in Object ? ok : no) + 'Object.getPrototypeOf',
  ('getOwnPropertyNames' in Object ? ok : no ) + 'Object.getOwnPropertyNames',
  ('create' in Object ? ok : no) + 'Object.create',
  ('defineProperty' in Object ? ok : no) + 'Object.defineProperty',
  ('defineProperties' in Object ? ok : no) + 'Object.defineProperties',
  ('keys' in Object ? ok : no) + 'Object.keys',
  ('getOwnPropertyDescriptor' in Object ? ok : no) + 'Object.getOwnPropertyDescriptor',
  ('bind' in Function.prototype ? ok : no) + 'Function.prototype.bind',
  ('isArray' in Array ? ok : no) + 'Array.isArray',
  ('indexOf' in Array.prototype ? ok : no) + 'Array.prototype.indexOf',
  ('lastIndexOf' in Array.prototype ? ok : no) + 'Array.prototype.lastIndexOf',
  ('every' in Array.prototype ? ok : no) + 'Array.prototype.every',
  ('some' in Array.prototype ? ok : no) + 'Array.prototype.some',
  ('forEach' in Array.prototype ? ok : no) + 'Array.prototype.forEach',
  ('map' in Array.prototype ? ok : no) + 'Array.prototype.map',
  ('filter' in Array.prototype ? ok : no) + 'Array.prototype.filter',
  ('reduce' in Array.prototype ? ok : no) + 'Array.prototype.reduce',
  ('reduceRight' in Array.prototype ? ok : no) + 'Array.prototype.reduceRight',
  ('trim' in String.prototype ? ok : no) + 'String.prototype.trim',
  ('now' in Date ? ok : no) + 'Date.now',
  ('toISOString' in Date.prototype ? ok : no) + 'Date.prototype.toISOString',
  '<b>ES6</b>',
  ('assign' in Object ? ok : no) + 'Object.assign'
]
for(var i = 0; i < checker.length; i++ ) {
  pre.innerHTML += checker[i]+'<br>'  
}