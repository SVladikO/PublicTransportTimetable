'use strict';

let TableData = require('./src/scripts/tableData');
let Color = require('./src/scripts/color');

test('Should set default parameters', () => {
  let table = new TableData();

  expect(table.rootClass).toBe(undefined);
  expect(table.height).toBe(80);
  expect(table.columns).toBe(21);
  expect(table.color).toBe(Color.green);
  expect(table.language).toBe('eng');
  expect(table.interval).toBe(500);
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

  const ClASS_NAME = 'className';

  let table = new TableData(ClASS_NAME, options);

  expect(table.rootClass).toBe(ClASS_NAME);
  expect(table.height).toBe(options.height);
  expect(table.columns).toBe(options.columns);
  expect(table.color).toBe(options.color);
  expect(table.language).toBe(options.language);
  expect(table.interval).toBe(options.interval);
});