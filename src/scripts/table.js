'use strict';

module.exports = class Table {
  constructor(className, { height = 30, columns = 40, color = 'chartreuse', language = 'eng', interval = 500, backgroundColor = 'black' } = {}) {
    if (!className || className.length === 0) throw new Error(".className isn't valid");
    this.className = className;
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
