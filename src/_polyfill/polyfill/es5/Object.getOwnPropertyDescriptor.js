'use strict'

if (typeof Object.getOwnPropertyDescriptor !== "function") {
  Object.getOwnPropertyDescriptor = function(o, name) {
    if (o !== Object(o)) { throw TypeError(); }
    if (o.hasOwnProperty(name)) {
      return {
        value: o[name],
        enumerable: true,
        writable: true,
        configurable: true
      };
    }
  };
}