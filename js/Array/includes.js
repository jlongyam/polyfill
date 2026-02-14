if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function (searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
      var O = Object(this);
      var len = O.length >>> 0;
      if (len === 0) {
        return false;
      }
      var n = fromIndex | 0;
      var k = Math.max(n >= 0 ? n : len + n, 0);
      while (k < len) {
        if (O[k] === searchElement || (typeof searchElement === 'number' && searchElement === searchElement && O[k] !== O[k])) {
          return true;
        }
        k++;
      }
      return false;
    },
    configurable: true,
    writable: true
  });
}
