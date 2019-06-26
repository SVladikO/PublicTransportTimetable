'use strict';

const getConvertedText = require('../../../../src/scripts/features/get-converted-text.js');
const Character = require('../../../../src/scripts/character.js');

test('Should return empty array', function () {
  const convertedText = getConvertedText();
  expect(convertedText.length).toBe(0);
});

test('Should convert', function () {
  const convertedText = getConvertedText('.', 'eng', Character);
  expect(convertedText[0]).toBe(Character['eng']['.'][0]);
});

test('Should throw error on empty language param', function () {
  expect(() => getConvertedText('.', '', Character)).toThrow();
});

test('Should throw error on missed Character param', function () {
  expect(() => getConvertedText('.', '')).toThrow();
});

test('Should throw error on wrong language param', function () {
  expect(() => getConvertedText('.', '12', Character)).toThrow();
});