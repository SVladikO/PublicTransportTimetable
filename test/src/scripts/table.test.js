
const Table = require('../../../src/scripts/table.js');
const defaultValues = require('../../../src/scripts/defaultValues.js');

const ClASS_NAME = 'className';

test('Should set default parameters', () => {
  let table = new Table(ClASS_NAME);

  expect(table.className).toBe(ClASS_NAME);
  expect(table.language).toBe(defaultValues.language);
  expect(table.boardHeight).toBe(defaultValues.boardHeight);
  expect(table.boardBgColor).toBe(defaultValues.boardBgColor);
  expect(table.timeInterval).toBe(defaultValues.timeInterval);
  expect(table.columnsInBoard).toBe(defaultValues.columnsInBoard);
  expect(table.lampColorOn).toBe(defaultValues.lampColorOn);
  expect(table.lampColorOff).toBe(defaultValues.lampColorOff);
  expect(table.intervalID).toBeNull();
});

test('Should set outcomes parameters', () => {
  let options = {
    boardHeight: 85,
    columnsInBoard: 50,
    lampColorOn: 'red',
    lampColorOff: 'blue',
    language: 'ua',
    timeInterval: 1000
  };

  let table = new Table(ClASS_NAME, options);

  expect(table.className).toBe(ClASS_NAME);
  expect(table.boardHeight).toBe(options.boardHeight);
  expect(table.columnsInBoard).toBe(options.columnsInBoard);
  expect(table.lampColorOn).toBe(options.lampColorOn);
  expect(table.lampColorOff).toBe(options.lampColorOff);
  expect(table.language).toBe(options.language);
  expect(table.timeInterval).toBe(options.timeInterval);
});

test('Should throw errors without .className', () => {
  expect(() => new Table()).toThrow();
});
