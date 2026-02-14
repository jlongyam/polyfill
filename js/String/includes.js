if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if (start === undefined) {
      start = 0;
    }

    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var opener = String(this);

    // This is the spec-compliant way to check for a valid start position
    if (start > opener.length || start < 0) {
      start = 0;
    }
    return opener.indexOf(String(search), start) !== -1;
  };
}

