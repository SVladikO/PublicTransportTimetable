'use strict';

module.exports = function getRoot(root) {
  let element = document.querySelector(root);
  if (!element) throw new Error("root doesn't exist");

  return element;
}
