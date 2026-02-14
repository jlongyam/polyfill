if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement, fromIndex) {
    return this.indexOf(searchElement, fromIndex) !== -1;
  };
}
