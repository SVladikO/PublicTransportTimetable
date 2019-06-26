'use strict';

const getColumnsByText = require('../../../../src/scripts/features/get-columns-by-text');
const Character = require('../../../../src/scripts/character.js');

test('Should return 0 size', function () {
  const result = getColumnsByText('', 'eng', Character, 7);
  expect(result).toBe(0);
});

test('Should work correct', function () {
  const result = getColumnsByText('.', 'eng', Character, 7);
  expect(result).toBe(2);
});
