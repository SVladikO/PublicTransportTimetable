'use strict';

const getDiv = require('../../../../src/scripts/features/get-div.js');

test('Should throw Error', function () {
  expect(() => getDiv()).toThrow();
});

test('Should return columns', function () {
  const CLASS_NAME = 'table';
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  const result = getDiv(CLASS_NAME);

  expect(result).toBeDefined();
});

