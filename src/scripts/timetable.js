'use strict';

const Character = require('./character');
const imageDisabledLamp = 'public/img/off.png';
const createBoard = require('./features/create-board.js');
const getConvertedText = require('./features/get-converted-text.js');

const TABLE_ROWS = 7;

class Timetable {
  constructor(rootClass, { height = 80, columns = 40, color = 'chartreuse', language = 'eng', interval = 500 } = {}) {
    if (!rootClass || rootClass.length === 0) throw new Error(".rootClass isn't valid");
    this.rootClass = rootClass;
    this.height = height;
    this.columns = columns;
    this.color = { active: color, disabled: '' };
    this.language = language;
    this.interval = interval;

    this.intervalID = null;
    this._convertedText = [];
  }

  init() {
    createBoard(this.rootClass, this.height, this.columns, imageDisabledLamp);
    this._images = this._getImgFromDOM();
    return this;
  }

  show(text) {
    this._prepareDataAndTable(text);
    this._turnOnAllCoordinates();
  }

  moveLeft(text, time, interval) {
    this._prepareDataAndTable(text);
    let customTime = time;
    this._goToRight();
    this._moveCoreFunctionality(checkPosition, position => position - TABLE_ROWS, interval);

    function checkPosition() {
      if (!(this._convertedText.slice(-1)[0] < 0)) return;

      if (--customTime) {
        this._goToRight();
      } else {
        clearInterval(this.intervalID);
      }
    }
  }

  moveRight(text, time, interval) {
    this._prepareDataAndTable(text);
    let customTime = time;
    this._goToLeft();
    this._moveCoreFunctionality(checkPosition, position => position + TABLE_ROWS, interval);

    function checkPosition() {
      if (!(this._convertedText[0] > this._images.length)) return;

      if (--customTime) {
        this._goToLeft();
      } else {
        clearInterval(this.intervalID);
      }
    }
  }

  clear() {
    clearInterval(this.intervalID);
    this._turnOffAllCoordinates();
  }

  createCharacter() {
    this._convertedText = [];
    let root = document.getElementsByClassName(this.rootClass)[0];
    let nodes = Array.prototype.slice.call(root.children);

    root.addEventListener('click', function(event) {
      this.clear();
      let { target } = event;
      const indexInImage = nodes.indexOf(target);
      let indexInCoordinates = this._convertedText.indexOf(indexInImage)
      if (indexInCoordinates >= 0) {
        this._convertedText.splice(indexInCoordinates, 1);
      } else {
        this._convertedText.push(indexInImage);

        if (this._convertedText.length >= 2) {
          this._convertedText.sort((a, b) => a - b);
        }
        console.log(this._convertedText);
      }
      this._turnOnAllCoordinates();
    }.bind(this));
  }

  _prepareDataAndTable(text) {
    this.clear();
    this.text = '' + text;
    this._convertedText = getConvertedText(this.text, this.language, Character);
  }

  _goToRight() {
    const POSITION_FIRST = this._convertedText[0];
    const INCREMENT = Math.floor(POSITION_FIRST / -TABLE_ROWS) * TABLE_ROWS + this._images.length;
    this._convertedText = this._convertedText.map(num => num + INCREMENT);
  }

  _goToLeft() {
    const POSITION_LAST = this._convertedText.slice(-1)[0];
    const INCREMENT = Math.floor(POSITION_LAST / TABLE_ROWS) * TABLE_ROWS;
    this._convertedText = this._convertedText.map(num => num - INCREMENT);
  }

  _getImgFromDOM() {
    let root = document.getElementsByClassName(this.rootClass)[0];
    return root.getElementsByTagName('IMG');
  }

  _switchColor(position, color) {
    if (position >= 0 && position < this._images.length) {
      this._images[position].style.backgroundColor = color;
    }
  }

  _turnOnAllCoordinates() {
    this._convertedText.forEach(position => this._switchColor(position, this.color.active));
  }

  _turnOffAllCoordinates() {
    this._convertedText.forEach(position => this._switchColor(position, this.color.disabled));
  }

  _moveCoreFunctionality(checkCallback, changeCallback, interval = this.interval) {
    this.intervalID = setInterval(function() {
      try {
        checkCallback.call(this);
        this._turnOffAllCoordinates();
        this._convertedText = this._convertedText.map(position => {
          let newPosition = changeCallback(position);
          this._switchColor(newPosition, this.color.active);
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
