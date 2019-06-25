'use strict';

let Color = require('./color');
class TableData {
  constructor(rootClass, { height = 80, columns = 20, color: colorName = 'green', language = 'eng', interval = 500 } = {}) {
    if (!rootClass || rootClass.length === 0) throw new Error(".rootClass isn't valid");
    this.rootClass = rootClass;
    this.height = height;
    this.columns = columns;
    this.color = Color.get(colorName);
    this.language = language;
    this.interval = interval;

    this.intervalID = null;
    this._convertedText = [];
  }
}

module.exports = TableData;
