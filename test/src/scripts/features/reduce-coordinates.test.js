'use strict';

const Timetable = require('../../../../src/scripts/timetable.js');
const reduceCoordinates = require('../../../../src/scripts/features/reduce-coordinates.js');

test('Should delete if include & add if does not', function () {
  // prepare table
  const CLASS_NAME = 'className';
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  let table = new Timetable(CLASS_NAME);

  // prepare variables for test
  const div = document.getElementsByClassName(CLASS_NAME)[0];
  const nodes = Array.prototype.slice.call(div.children);
  let image = div.getElementsByTagName('span')[0];

  let convertedText = [];

  reduceCoordinates(nodes, image, convertedText);
  expect(convertedText.length).toBe(1);
  reduceCoordinates(nodes, image, convertedText);
  expect(convertedText.length).toBe(0);
});
