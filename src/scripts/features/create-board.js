'use strict';

const getLampDiameter = require('./get-lamp-diameter.js');
const getDiv = require('./get-div.js');
const TABLE_ROWS = 7;

function createBoard(className, boardHeight, columnsInBoard, lampColorOff, boardBgColor) {
  let root = getDiv(className);

  root.style.position = 'relative';
  root.style.background = boardBgColor;
  root.style.height = `${boardHeight}px`;

  const lapmSize = getLampDiameter(boardHeight);
  const position = lapmSize + lapmSize / 5;

  for (let j = 0; j < columnsInBoard; j++) {
    for (let i = 0; i < TABLE_ROWS; i++) {
      let span = document.createElement('span');

      span.style.top = `${position * i}px`;
      span.style.left = `${position * j}px`;
      span.style.width = `${lapmSize}px`;
      span.style.height = `${lapmSize}px`;
      span.style.position = 'absolute';
      span.style.borderRadius = '50%';
      span.style.background = lampColorOff;

      root.appendChild(span);
    }
  }
}

module.exports = createBoard;
