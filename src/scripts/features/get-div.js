'use strict';

module.exports = function getDiv(className) {
  if (!className) throw new Error('.rootClass is empty');
  let div = document.getElementsByClassName(className)[0];
  if (!div) throw new Error("RootClass doesn't exist");

  return div;
}
