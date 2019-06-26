'use strict';
const getDiv = require('./get-div.js');
const getImageSize = require('./get-image-size');

function getColumnsFullWidth(heigh, className) {
  const div = getDiv(className);
  const imageSize = getImageSize(heigh);
  const widthImageWithSpace = imageSize + imageSize / 5;
  const rootWidth = div.clientWidth;
  const columns = Math.floor(rootWidth / widthImageWithSpace);

  return columns;
}

module.exports = getColumnsFullWidth;
