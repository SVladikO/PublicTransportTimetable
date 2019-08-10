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
  constructor(className, {
    language = 'eng',
    boardHeight = 30,
    boardBgColor = 'red',
    lampColorOn = 'rgb(28, 226, 116)',
    lampColorOff = 'rgb(7, 84, 41)',
    timeInterval = 500,
    columnsInBoard = 40,
  } = {}) {
    if (!className || className.length === 0) throw new Error(".className isn't valid");
    this.className = className;
    this.language = language;
    this.boardHeight = boardHeight;
    this.boardBgColor = boardBgColor;
    this.timeInterval = timeInterval;
    this.columnsInBoard = columnsInBoard;
    this.lampColor = { active: lampColorOn, disabled: lampColorOff };
    this.intervalID = null;
    this._coordinates = [];
  }
}
