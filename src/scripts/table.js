'use strict';

module.exports = class Table {
  constructor(rootClass, { height = 30, columns = 40, color = 'chartreuse', language = 'eng', interval = 500, backgroundColor = 'black' } = {}) {
    if (!rootClass || rootClass.length === 0) throw new Error(".rootClass isn't valid");
    this.rootClass = rootClass;
    this.backgroundColor = backgroundColor;
    this.height = height;
    this.columns = columns;
    this.color = { active: color, disabled: '' };
    this.language = language;
    this.interval = interval;

    this.intervalID = null;
    this._convertedText = [];
  }
}
