'use strict';

let Color = require('./color');
const Character = require('./character');

const TABLE_ROWS = 7;
let pointsAmount;

class Table {
  constructor(rootClass, { tableHeight = 80, tableColumns = 7, color = Color.green, language = 'eng', timeInterval = 500 }) {
    this.rootClass = rootClass;
    this.tableHeight = tableHeight;
    this.tableColumns = tableColumns;
    this.color = color;
    this.language = language;
    this.timeInterval = timeInterval;

    // Auto generation
    this._createEmptyBoard();
    this.images = this._getImgFromDOM();
    this.intervalID = null;
    this.convertedText = [];
    pointsAmount = TABLE_ROWS * this.tableColumns;
  }

  show(text) {
    this._prepareDataAndTable(text);
    this.convertedText.forEach(position => this._switchColor(position, this.color.active));
  }

  clear() {
    clearInterval(this.intervalID);
    this.convertedText.forEach(position => this._switchColor(position, this.color.disabled));
  }

  _prepareDataAndTable(text) {
    this.clear();
    if (text) this.text = text;
    this._updateConvertedText();
  }

  moveLeft(text, time, timeInterval) {
    this._prepareDataAndTable(text);
    let customTime = time;
    this._goToRight();
    this._moveCoreFunctionality(checkPosition, position => position - TABLE_ROWS, timeInterval);

    function checkPosition() {
      if (!(this.convertedText.slice(-1)[0] < 0)) return;

      if (--customTime) {
        this._goToRight();
      } else {
        clearInterval(this.intervalID);
      }
    }
  }

  moveRight(text, time, timeInterval) {
    this._prepareDataAndTable(text);
    let customTime = time;
    this._goToLeft();
    this._moveCoreFunctionality(checkPosition, position => position + TABLE_ROWS, timeInterval);

    function checkPosition() {
      if (!(this.convertedText[0] > pointsAmount)) return;

      if (--customTime) {
        this._goToLeft();
      } else {
        clearInterval(this.intervalID);
      }
    }
  }

  createCharacter() {
    this.convertedText = [];
    let root = document.getElementsByClassName(this.rootClass)[0];
    let nodes = Array.prototype.slice.call(root.children);

    root.addEventListener('click', function(event) {
      this.clear();
      let { target } = event;
      const indexInImage = nodes.indexOf(target);
      let indexInCoordinates = this.convertedText.indexOf(indexInImage)
      if (indexInCoordinates >= 0) {
        this.convertedText.splice(indexInCoordinates, 1);
      } else {
        this.convertedText.push(indexInImage);
      }
      console.log(this.convertedText);

      this.convertedText.forEach(position => this._switchColor(position, this.color.active));
    }.bind(this));
  }

  _createEmptyBoard() {
    let root = document.getElementsByClassName(this.rootClass)[0];
    let images = root.getElementsByTagName('img');

    if (images.length > 0) return;

    root.style.position = 'relative';
    root.style.background = 'black';
    root.style.height = `${this.tableHeight}px`;
    let imageSize = this.tableHeight / 8.2;
    let position = imageSize + imageSize / 5;

    for (let j = 0; j < this.tableColumns; j++) {
      for (let i = 0; i < TABLE_ROWS; i++) {
        let img = document.createElement('img');
        img.src = this.color.disabled;
        img.style.width = `${imageSize}px`;
        img.style.height = `${imageSize}px`;
        img.style.position = 'absolute';
        img.style.top = `${position * i}px`;
        img.style.left = `${position * j}px`;

        root.appendChild(img);
      }
    }
  }

  _updateConvertedText() {
    if (!this.text) {
      this.convertedText = [];
      return;
    }

    let convertedText = [];
    let counter = createColumnsCounter();
    let customSymbols = this.text.toUpperCase().split('');

    customSymbols.forEach((symbol) => {
      let coordinates = Character[this.language][symbol];

      if (!coordinates) {
        if (symbol === ' ') counter.increment();
        return;
      }

      let newCoordinates = coordinates.map(n => n + counter.get());

      convertedText.push(...newCoordinates);
      counter.add(coordinates);
    });

    this.convertedText = convertedText;

    function createColumnsCounter() {
      let columns = 0;

      return {
        add(coordinates) {
          let spaceColumn = 1;
          const MAX = Math.max(...coordinates);
          let characterColumns = Math.floor(MAX / TABLE_ROWS);
          // increment ++characterColumns is because we count length not index
          columns += ++characterColumns + spaceColumn;
        },

        get() {
          return columns * TABLE_ROWS;
        },

        increment() {
          columns++;
        }
      }
    }
  }

  _goToRight() {
    const POSITION_FIRST = this.convertedText[0];
    const INCREMENT = Math.floor(POSITION_FIRST / -TABLE_ROWS) * TABLE_ROWS + pointsAmount;
    this.convertedText = this.convertedText.map(num => num + INCREMENT);
  }

  _goToLeft() {
    const POSITION_LAST = this.convertedText.slice(-1)[0];
    const INCREMENT = Math.floor(POSITION_LAST / TABLE_ROWS) * TABLE_ROWS;
    this.convertedText = this.convertedText.map(num => num - INCREMENT);
  }

  _getImgFromDOM() {
    let root = document.getElementsByClassName(this.rootClass)[0];
    return root.getElementsByTagName('IMG');
  }
  _switchColor(position, color) {
    if (position >= 0 && position < pointsAmount) {
      this.images[position].src = color;
    }
  }
  _moveCoreFunctionality(checkCallback, changeCallback, interval = this.timeInterval) {
    this.intervalID = setInterval(function() {
      try {
        checkCallback.call(this);
        this.convertedText.forEach(position => {
          this._switchColor(position, this.color.disabled);
        });
        this.convertedText = this.convertedText.map(position => {
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

module.exports = Table;
