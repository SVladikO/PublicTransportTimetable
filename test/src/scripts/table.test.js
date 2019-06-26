
const Table = require('../../../src/scripts/table.js');

const ClASS_NAME = 'className';

test('Should set default parameters', () => {
  let table = new Table(ClASS_NAME);

  expect(table.rootClass).toBe(ClASS_NAME);
  expect(table.height).toBe(80);
  expect(table.columns).toBe(40);
  expect(table.color.active).toBe('chartreuse');
  expect(table.color.disabled).toBe('');
  expect(table.language).toBe('eng');
  expect(table.interval).toBe(500);
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

  let table = new Table(ClASS_NAME, options);

  expect(table.rootClass).toBe(ClASS_NAME);
  expect(table.height).toBe(options.height);
  expect(table.columns).toBe(options.columns);
  expect(table.color.active).toBe(options.color);
  expect(table.color.disabled).toBe('');
  expect(table.language).toBe(options.language);
  expect(table.interval).toBe(options.interval);
});

test('Should throw errors without .rootClass', () => {
  expect(() => new Table()).toThrow();
});
