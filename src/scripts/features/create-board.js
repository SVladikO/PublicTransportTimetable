'use strict';

const getImageSize = require('./get-image-size.js');
const getDiv = require('./get-div.js');
const TABLE_ROWS = 7;

function createBoard(className, height, columns, imageDisabledLamp, backgroundColor) {
  let root = getDiv(className);
  let images = root.getElementsByTagName('img');

  if (images.length > 0) return;

  root.style.position = 'relative';
  root.style.background = backgroundColor;
  root.style.height = `${height}px`;
  const imageSize = getImageSize(height);
  const position = imageSize + imageSize / 5;

  for (let j = 0; j < columns; j++) {
    for (let i = 0; i < TABLE_ROWS; i++) {
      let img = document.createElement('img');
      img.src = imageDisabledLamp;
      img.style.width = `${imageSize}px`;
      img.style.height = `${imageSize}px`;
      img.style.position = 'absolute';
      img.style.borderRadius = '50%';
      img.style.top = `${position * i}px`;
      img.style.left = `${position * j}px`;

      root.appendChild(img);
    }
  }
}

module.exports = createBoard;
