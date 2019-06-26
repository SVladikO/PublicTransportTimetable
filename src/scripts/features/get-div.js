'use strict';

module.exports = function getDiv(className) {
  if (!className) throw new Error('.className is empty');
  let div = document.getElementsByClassName(className)[0];
  if (!div) throw new Error("className doesn't exist");

  return div;
}
