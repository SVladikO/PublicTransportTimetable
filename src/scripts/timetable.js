'use strict';

const Character = require('./character.js');
const getColumnsByText = require('./features/get-columns-by-text.js');
const getColumnsFullWidth = require('./features/get-columns-full-width.js');
const reduceCoordinates = require('./features/reduce-coordinates.js');
const createBoard = require('./features/create-board.js');
const getRoot = require('./features/get-root.js');
const getConvertedText = require('./features/get-converted-text.js');

const TABLE_ROWS = 7;

/**
 * Manipulation ua/eng text in div(table)
 */
class Timetable {
  constructor(root, {
    language = 'eng',
    // You can style your root through this field
    rootHeight = 30,
    rootWidth = 0,
    rootBackground = '#16300b',
    lampColorOn = '#9dd143',
    lampColorOff = '#1d5110',
    timeInterval = 500
  } = {}) {
    if (!root || root.length === 0) {
      throw new Error('root is empty');
    }

    if (!'.#'.includes(root[0])) {
      throw new Error(root + ' isn\'t valid root. Please use next syntax for #id or .className');
    }

    if (!language) throw new Error('language is not valid');

    this.root = getRoot(root);
    this.languageKey = language;
    this.rootHeight = rootHeight;
    this.rootWidth = rootWidth;
    this.rootBackground = rootBackground;
    this.timeInterval = timeInterval;
    this.lampColorOn = lampColorOn;
    this.lampColorOff = lampColorOff;
    this.intervalID = null;
    this._coordinates = [];

    createBoard(this.root, this.rootHeight, this.rootWidth, this.lampColorOff, this.rootBackground);
    this._images = this._getLampsFromDOM();
  }

  getDefault() {
    console.log('languageKey - ', this.languageKey);
    console.log('rootHeight - ', this.rootHeight);
    console.log('rootWidth - ', this.rootWidth);
    console.log('rootBackground - ', this.rootBackground);
    console.log('timeInterval - ', this.timeInterval );
    console.log('lampColorOn - ', this.lampColorOn);
    console.log('lampColorOff - ', this.lampColorOff);
  }

  /**
   * Clear previous and show new text
   * @param  {string} text
   */
  show(text) {
    this.clear();
    this._convert(text);
    this._turnOnAllCoordinates();
    return this;
  }

  /**
   * Clear previous and move left new text.
   * @param  {string} text
   * @param  {number} [circles] circles to repeat
   * @param  {number} [timeInterval] seconds for setInterval
   */
  moveLeft(text, circles = 0, timeInterval) {
    this.clear();
    this._convert(text);
    this._goToStartFromRightSide();
    this._moveCoreFunctionality(checkPosition, position => position - TABLE_ROWS);
    function checkPosition() {
      if (!(this._coordinates.slice(-1)[0] < 0)) {
        return;
      }

      if (circles <= 0) {
        clearInterval(this.intervalID);
        this._coordinates = [];
        return;
      }

      --circles;
      this._goToStartFromRightSide();
    }
  }

  /**
    * Clear previous and move right new text.
    * @param  {string} text
    * @param  {number} [circles] circles to repeat
    * @param  {number} [timeInterval] seconds for setInterval
    */
  moveRight(text, circles = 0, timeInterval) {
    this.clear();
    this._convert(text);
    this._goToStartFromLeftSide();
    this._moveCoreFunctionality(checkPosition, position => position + TABLE_ROWS);

    function checkPosition() {
      if (!(this._coordinates[0] > this._images.length)) return;

      if (circles <= 0) {
        clearInterval(this.intervalID);
        this._coordinates = [];
        this.clear();
        return;
      }

      --circles;
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
   * Calculate columns depends on div[root].width.
   * We need here height too, because image size calculated from height
   * @param  {number} height    Table's
   * @param  {string} root Where you want to create table
   * @returns {string} columns
   */
  static getColumnsFullWidth(height, root) {
    return getColumnsFullWidth(height, root);
  }

  /**
   * Calculate columns depends on text length.
   * @param  {string} text
   * @param  {string} languageKey = 'eng'
   * @returns {number} columns
   */
  static getColumnsByText(text, languageKey = 'eng') {
    return getColumnsByText(text, languageKey, Character, TABLE_ROWS)
  }

  /**
   * Create table and add on her eventListener.
   * Print clicked coordinates in console.
   * When you finished you need to copy coordinates
   * and put them in character.js
   */
  static createCharacter(_root) {
    const timetable = new Timetable(_root, { rootHeight: 100, rootWidth: 100 });
    const root = getRoot(_root);
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
    this._coordinates = getConvertedText('' + text, this.languageKey, Character);
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

  _getLampsFromDOM() {
    return this.root.getElementsByTagName('span');
  }

  _switchImageBackgroundColor(position, color) {
    if (position >= 0 && position < this._images.length) {
      this._images[position].style.backgroundColor = color;
    }
  }

  _turnOnAllCoordinates() {
    this._coordinates.forEach(position => this._switchImageBackgroundColor(position, this.lampColorOn));
  }

  _turnOffAllCoordinates() {
    this._coordinates.forEach(position => this._switchImageBackgroundColor(position, this.lampColorOff));
  }

  /**
   * Full circle movement text's coordinates
   * @param  {function} checkCallback
   * @param  {function} changeCallback
   */
  _moveCoreFunctionality(checkCallback, changeCallback) {
    this.intervalID = setInterval(function() {
      try {
        checkCallback.call(this);
        this._turnOffAllCoordinates();
        this._coordinates = this._coordinates.map(position => {
          let newPosition = changeCallback(position);
          this._switchImageBackgroundColor(newPosition, this.lampColorOn);
          return newPosition;
        });
      } catch (error) {
        clearInterval(this.intervalID);
        throw error;
      }
    }.bind(this), this.timeInterval);
  }
}

module.exports = Timetable;
