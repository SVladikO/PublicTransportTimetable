'use strict';

let Color = require('./color');
class TableData {
  constructor(rootClass, { height = 80, columns = 21, color = Color.green, language = 'eng', interval = 500 } = {}) {
    if (!rootClass || rootClass.length === 0) throw new Error(".rootClass isn't valid");
    this._rootClass = rootClass;
    this.height = height;
    this.columns = columns;
    this.color = color;
    this.language = language;
    this.interval = interval;

    this.intervalID = null;
    this._convertedText = [];
  }
}

module.exports = TableData;
