'use strict';

const TableData = require('../../../src/scripts/tableData');
const Color = require('../../../src/scripts/color');

const ClASS_NAME = 'className';

test('Should set default parameters', () => {
  let table = new TableData(ClASS_NAME);

  let defaultOptions = {
    height: 80,
    columns: 40,
    color: Color.get('green'),
    language: 'eng',
    interval: 500
  }

  expect(table.rootClass).toBe(ClASS_NAME);
  expect(table.height).toBe(defaultOptions.height);
  expect(table.columns).toBe(defaultOptions.columns);
  expect(table.color.active).toBe(defaultOptions.color.active);
  expect(table.color.disabled).toBe(defaultOptions.color.disabled);
  expect(table.language).toBe(defaultOptions.language);
  expect(table.interval).toBe(defaultOptions.interval);
  // expect(table.convertedText).toBe([]);
  expect(table.intervalID).toBeNull();
});

test('Should set outcomes parameters', () => {

  let options = {
    height: 85,
    columns: 50,
    color: 'red',
    language: 'ua',
    interval: 1000
  };

  let table = new TableData(ClASS_NAME, options);

  expect(table.rootClass).toBe(ClASS_NAME);
  expect(table.height).toBe(options.height);
  expect(table.columns).toBe(options.columns);

  let color = Color.get(options.color);

  expect(table.color.active).toBe(color.active);
  expect(table.color.disabled).toBe(color.disabled);
  expect(table.language).toBe(options.language);
  expect(table.interval).toBe(options.interval);
});


test('Should throw errors without .rootClass', () => {
  expect(() => new TableData()).toThrow();
});