'use strict';
const getDiv = require('./get-div.js');
const getLampSize = require('./get-lamp-diameter');

function getColumnsFullWidth(height, root, width) {
  const div = getDiv(root);
  const divWidth = width || div.clientWidth;

  const imageSize = getLampSize(height);
  const imageAndSpaceWidth = Math.floor(imageSize + imageSize / 5);

  const columns = Math.floor(divWidth / imageAndSpaceWidth);

  return columns;
}

module.exports = getColumnsFullWidth;
