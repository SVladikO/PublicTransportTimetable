'use strict';

const TableData = require('../../../src/scripts/tableData');
const Color = require('../../../src/scripts/color');

const ClASS_NAME = 'className';

test('Should set default parameters', () => {
  let table = new TableData(ClASS_NAME);

  expect(table._rootClass).toBe(ClASS_NAME);
  expect(table._height).toBe(80);
  expect(table._columns).toBe(21);
  expect(table._color).toBe(Color.green);
  expect(table._language).toBe('eng');
  expect(table._interval).toBe(500);
  // expect(table.convertedText).toBe([]);
  expect(table.intervalID).toBeNull();
});

test('Should set outcomes parameters', () => {

  let options = {
    height: 85,
    columns: 50,
    color: Color.red,
    language: 'ua',
    interval: 1000
  };

  let table = new TableData(ClASS_NAME, options);

  expect(table._rootClass).toBe(ClASS_NAME);
  expect(table._height).toBe(options.height);
  expect(table._columns).toBe(options.columns);
  expect(table._color).toBe(options.color);
  expect(table._language).toBe(options.language);
  expect(table._interval).toBe(options.interval);
});


test('Should throw errors without .rootClass', () => {
  expect(() => new TableData()).toThrow();
});