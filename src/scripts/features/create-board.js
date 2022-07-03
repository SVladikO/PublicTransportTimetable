'use strict';

const getLampDiameter = require('./get-lamp-diameter.js');
const TABLE_ROWS = 7;

function createBoard(root, rootHeight, rootWidth, lampColorOff, boardBgColor) {
  if (rootWidth) {
    root.style.width = rootWidth + 'px';
  }
  root.style.overflow = 'hidden';
  root.style.position = 'relative';
  root.style.background = boardBgColor;
  root.style.height = `${rootHeight}px`;

  const lamSize = getLampDiameter(rootHeight);
  const columnsAmount = (rootWidth || root.clientWidth) / lamSize + 1;
  const position = lamSize + lamSize / 5;

  for (let j = 0; j < columnsAmount; j++) {
    for (let i = 0; i < TABLE_ROWS; i++) {
      let span = document.createElement('span');

      span.style.top = `${position * i}px`;
      span.style.left = `${position * j}px`;
      span.style.width = `${lamSize}px`;
      span.style.height = `${lamSize}px`;
      span.style.position = 'absolute';
      span.style.borderRadius = '50%';
      span.style.background = lampColorOff;

      root.appendChild(span);
    }
  }
}

module.exports = createBoard;
