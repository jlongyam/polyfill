(function () {
  if (typeof Object.defineProperty !== 'function') {
    Object.defineProperty = function (obj, prop, descriptor) {
      if (obj !== Object(obj)) {
        throw new TypeError('Object.defineProperty called on non-object');
      }
      if (descriptor.get && obj.__defineGetter__) {
        obj.__defineGetter__(prop, descriptor.get);
      }
      if (descriptor.set && obj.__defineSetter__) {
        obj.__defineSetter__(prop, descriptor.set);
      }
      if ('value' in descriptor && !descriptor.get && !descriptor.set) {
        obj[prop] = descriptor.value;
      }
      return obj;
    };
  }
})();
