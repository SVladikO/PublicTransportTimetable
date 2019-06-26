'use strict';

const getColumnsFullWidth = require('../../../../src/scripts/features/get-columns-full-width.js');

test('Should throw Error', function () {
  expect(() => getColumnsFullWidth(80, '')).toThrow();
});

test('Should return columns', function () {
  const CLASS_NAME = 'table';
  const width = 80;
  document.body.innerHTML = `<div style="${width}px" class="${CLASS_NAME}"></div>`;
  const result = getColumnsFullWidth(80, CLASS_NAME, 80);

  expect(result).toBe(7);
});

