'use strict';

let Character = require('./character');
let TableData = require('./tableData');

const TABLE_ROWS = 7;
let pointsAmount;

class TableService extends TableData {
  constructor(rootClass, options) {
    super(...arguments);
    this._createEmptyBoard();
    this._images = this._getImgFromDOM();
    pointsAmount = TABLE_ROWS * this.columns;
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
      if (!(this._convertedText[0] > pointsAmount)) return;

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
      }
      this._turnOnAllCoordinates();
    }.bind(this));
  }

  _createEmptyBoard() {
    let root = document.getElementsByClassName(this.rootClass)[0];
    if (!root) throw new Error("RootClass doesn't exist");
    let images = root.getElementsByTagName('img');

    if (images.length > 0) return;

    root.style.position = 'relative';
    root.style.background = 'black';
    root.style.height = `${this.height}px`;
    let imageSize = this.height / 8.2;
    let position = imageSize + imageSize / 5;

    for (let j = 0; j < this.columns; j++) {
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

  _prepareDataAndTable(text) {
    this.clear();
    this.text = '' + text;
    this._updateConvertedText();
  }

  _updateConvertedText() {
    this._convertedText = [];

    if (!this.text) return;

    let counter = createColumnsCounter();
    let customSymbols = this.text.toUpperCase().split('');

    this._convertedText = customSymbols.reduce((convertedText, symbol) => {
      let coordinates = Character[this.language][symbol];

      if (coordinates) {
        let newCoordinates = coordinates.map(n => n + counter.get());
        convertedText.push(...newCoordinates);
        counter.add(coordinates);
      } else if (symbol === ' ') {
        counter.increment();
      }

      return convertedText;
    }, []);

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
    const POSITION_FIRST = this._convertedText[0];
    const INCREMENT = Math.floor(POSITION_FIRST / -TABLE_ROWS) * TABLE_ROWS + pointsAmount;
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
    if (position >= 0 && position < pointsAmount) {
      this._images[position].src = color;
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

module.exports = TableService;
