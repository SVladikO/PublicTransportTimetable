'use strict';

const getRoot = require('../../../../src/scripts/features/get-root.js');

test('Should throw Error', function () {
  expect(() => getRoot()).toThrow();
});

test('Should return columns', function () {
  const CLASS_NAME = 'table';
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  const result = getRoot(CLASS_NAME);

  expect(result).toBeDefined();
});

