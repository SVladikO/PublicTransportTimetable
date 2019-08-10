'use strict';

const defaultValues = require('./defaultValues');

module.exports = class Table {
  /**
   * @param  {string} language
   * @param  {number} boardHeight
   * @param  {string} boardBgColor
   * @param  {string} lampColorOn
   * @param  {string} lampColorOff
   * @param  {number} timeInterval
   * @param  {number} columnsInBoard
   */
  constructor(className, {
    language = defaultValues.language,
    boardHeight = defaultValues.boardHeight,
    boardBgColor = defaultValues.boardBgColor,
    lampColorOn = defaultValues.lampColorOn,
    lampColorOff = defaultValues.lampColorOff,
    timeInterval = defaultValues.timeInterval,
    columnsInBoard = defaultValues.columnsInBoard
  } = {}) {
    if (!className || className.length === 0) throw new Error(".className isn't valid");
    this.className = className;
    this.language = language;
    this.boardHeight = boardHeight;
    this.boardBgColor = boardBgColor;
    this.timeInterval = timeInterval;
    this.columnsInBoard = columnsInBoard;
    this.lampColorOn = lampColorOn;
    this.lampColorOff = lampColorOff;
    this.intervalID = null;
    this._coordinates = [];
  }
}
