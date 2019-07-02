'use strict';

module.exports = class Table {
  /**
   * @param  {string} className
   * @param  {number} {height=30  - higher text
   * @param  {number} columns=40  - longer table
   * @param  {string} color='chartreuse'  - text color
   * @param  {string} language='eng'  - list of characters eng/ua
   * @param  {number} interval=500  - timeout (needed for moveLeft/moveRight)
   * @param  {string} backgroundColor='black' - timetable background
   */
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
    this._coordinates = [];
  }
}
