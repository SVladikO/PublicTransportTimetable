'use strict';

const createBoard = require('../../../../src/scripts/features/create-board.js');
const imageDisabledLamp = './public/img/off.png';

test('Should throw error without rootClass', function () {
  expect(() => createBoard()).toThrow();
});

const CLASS_NAME = 'table';

test('Should throw error without when class does not exist in DOM', function () {
  expect(() => createBoard(CLASS_NAME)).toThrow();
});

test('Should work without error even with only param rootClass', function () {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  createBoard(CLASS_NAME);
});
