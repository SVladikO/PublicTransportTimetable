'use strict';

module.exports = function getDiv(root) {
  let div = document.querySelector(root);
  if (!div) throw new Error("root doesn't exist");

  return div;
}
