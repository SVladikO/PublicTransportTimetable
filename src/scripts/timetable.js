'use strict';

const Table = require('./table.js');
const Character = require('./character.js');
const getColumnsByText = require('./features/get-columns-by-text.js');
const getColumnsFullWidth = require('./features/get-columns-full-width.js');
const reduceCoordinates = require('./features/reduce-coordinates.js');
const createBoard = require('./features/create-board.js');
const getDiv = require('./features/get-div.js');
const getConvertedText = require('./features/get-converted-text.js');

let imageDisabledLamp = 'public/img/off.png';

const TABLE_ROWS = 7;

/**
 * Manipulation ua/eng text in div(table)
 */
class Timetable extends Table {
  init() {
    createBoard(this.className, this.height, this.columns, imageDisabledLamp, this.backgroundColor);
    this._images = this._getImgFromDOM();
    return this;
  }

  /**
   * Clear previous and show new text
   * @param  {string} text
   */
  show(text) {
    this.clear();
    this._convert(text);
    this._turnOnAllCoordinates();
  }

  /**
   * Clear previous and move left new text.
   * @param  {string} text
   * @param  {number} [time] circles to repeat
   * @param  {number} [interval] seconds for setInterval
   */
  moveLeft(text, time = 0, interval) {
    this.clear();
    this._convert(text);
    this._goToStartFromRightSide();
    this._moveCoreFunctionality(checkPosition, position => position - TABLE_ROWS, interval);

    function checkPosition() {
      if (!(this._coordinates.slice(-1)[0] < 0)) return;

      if (time <= 0) {
        clearInterval(this.intervalID);
        this._coordinates = [];
        return;
      }

      --time;
      this._goToStartFromRightSide();
    }
  }

  /**
    * Clear previous and move right new text.
    * @param  {string} text
    * @param  {number} [time] circles to repeat
    * @param  {number} [interval] seconds for setInterval
    */
  moveRight(text, time = 0, interval) {
    this.clear();
    this._convert(text);
    this._goToStartFromLeftSide();
    this._moveCoreFunctionality(checkPosition, position => position + TABLE_ROWS, interval);

    function checkPosition() {
      if (!(this._coordinates[0] > this._images.length)) return;

      if (time <= 0) {
        clearInterval(this.intervalID);
        this._coordinates = [];
        this.clear();
        return;
      }

      --time;
      this._goToStartFromLeftSide();
    }
  }

  /**
   * Unique method to stop work any method show/moveLeft/moveRight
   * Clear intervalID
   * Disable text (It's mean we delete background color for processed text)
   */
  clear() {
    clearInterval(this.intervalID);
    this._turnOffAllCoordinates();
    this._coordinates = [];
    this.text = '';
  }

  /**
   * Update default path to image
   * @param  {string} src
   */
  static setImage(src) {
    imageDisabledLamp = src;
  }

  /**
   * Calculate columns depends on div[className].width.
   * We need here height too, because image size calculated from height
   * @param  {number} height    Table's
   * @param  {string} className Where you want to create table
   * @returns {string} columns
   */
  static getColumnsFullWidth(height, className) {
    return getColumnsFullWidth(height, className);
  }

  /**
   * Calculate columns depends on text length.
   * @param  {string} text
   * @param  {string} language = 'eng'
   * @returns {number} columns
   */
  static getColumnsByText(text, language = 'eng') {
    return getColumnsByText(text, language, Character, TABLE_ROWS)
  }

  /**
   * Create table and add on her eventListener.
   * Print clicked coordinates in console.
   * When you finished you need to copy coordinates
   * and put them in character.js
   */
  static createCharacter(className) {
    const timetable = new Timetable(className, { height: 100, columns: 7 }).init();
    const root = getDiv(className);
    addStyle(root);

    const nodes = Array.prototype.slice.call(root.children);
    root.addEventListener('click', function(event) {
      timetable.clear();
      reduceCoordinates(nodes, event.target, timetable._coordinates);
      console.log(sort(timetable._coordinates));
      timetable._turnOnAllCoordinates();
    });

    function addStyle(root) {
      root.style.border = 'solid 2px red';
      root.style.width = '100px';
      root.style.margin = 'auto';
      return root
    }

    function sort(coordinates) {
      return (coordinates.length >= 2) ? coordinates.sort((a, b) => a - b) : coordinates;
    }
  }

  _convert(text) {
    this._coordinates = getConvertedText('' + text, this.language, Character);
  }

  _goToStartFromRightSide() {
    const first = this._coordinates[0];
    const INCREMENT = Math.floor(first / -TABLE_ROWS) * TABLE_ROWS + this._images.length;
    this._coordinates = this._coordinates.map(num => num + INCREMENT);
  }

  _goToStartFromLeftSide() {
    const last = this._coordinates.slice(-1)[0];
    const INCREMENT = Math.floor(last / TABLE_ROWS) * TABLE_ROWS;
    this._coordinates = this._coordinates.map(num => num - INCREMENT);
  }

  _getImgFromDOM() {
    let root = document.getElementsByClassName(this.className)[0];
    return root.getElementsByTagName('IMG');
  }

  _switchImageBackgroundColor(position, color) {
    if (position >= 0 && position < this._images.length) {
      this._images[position].style.backgroundColor = color;
    }
  }

  _turnOnAllCoordinates() {
    this._coordinates.forEach(position => this._switchImageBackgroundColor(position, this.color.active));
  }

  _turnOffAllCoordinates() {
    this._coordinates.forEach(position => this._switchImageBackgroundColor(position, this.color.disabled));
  }

  /**
   * Full circle movement text's coordinates
   * @param  {function} checkCallback
   * @param  {function} changeCallback
   * @param  {number} interval=this.interval
   */
  _moveCoreFunctionality(checkCallback, changeCallback, interval = this.interval) {
    this.intervalID = setInterval(function() {
      try {
        checkCallback.call(this);
        this._turnOffAllCoordinates();
        this._coordinates = this._coordinates.map(position => {
          let newPosition = changeCallback(position);
          this._switchImageBackgroundColor(newPosition, this.color.active);
          return newPosition;
        });
      } catch (error) {
        clearInterval(this.intervalID);
        throw error;
      }
    }.bind(this), interval);
  }
}

module.exports = Timetable;
