'use strict';

let Color = require('./color');
class TableData {
  constructor(rootClass, { height = 80, columns = 21, color = Color.green, language = 'eng', interval = 500 } = {}) {
    if (!rootClass || rootClass.length === 0) throw new Error(".rootClass isn't valid");
    this._rootClass = rootClass;
    this._height = height;
    this._columns = columns;
    this._color = color;
    this._language = language;
    this._interval = interval;

    this.intervalID = null;
    this._convertedText = [];
  }
}

module.exports = TableData;
