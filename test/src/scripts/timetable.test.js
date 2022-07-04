
'use strict';

const Timetable = require('../../../src/scripts/timetable.js');
const Character = require('../../../src/scripts/character.js');
const defaultValues = require('../../../src/scripts/defaultValues');
const CLASS_NAME = 'table';
const lampTagName = 'span';

test('Should prepare environment without errors', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  new Timetable(CLASS_NAME);
});

test('Should throw errors', () => {
  expect(() => new Timetable()).toThrow();
});

test('Should create correct images amount', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  new Timetable(CLASS_NAME, { columnsInBoard: 1 });
  const div = document.getElementsByClassName(CLASS_NAME)[0];
  const lamps = div.getElementsByTagName(lampTagName);
  expect(lamps.length).toBe(7)
});

test('Should delete backgroundColor for all images', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;

  const text = '.';
  const position = Character['eng'][text][0];

  const options = { columnsInBoard: 1, lampColorOn: 'red' };

  const table = new Timetable(CLASS_NAME, options);
  table.show(text);

  const lamps = document.getElementsByTagName(lampTagName);

  expect(lamps[position].style.backgroundColor).toBe(options.lampColorOn);
  table.clear();
  expect(lamps[position].style.backgroundColor).toBe(defaultValues.lampColorOff);
});

test('Should watch click in createCharacter()', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  Timetable.createCharacter(CLASS_NAME)

  let lamp = document.getElementsByTagName(lampTagName)[0];

  expect(lamp.style.backgroundColor).toBe(defaultValues.lampColorOff);

  lamp.click();
  lamp = document.getElementsByClassName(CLASS_NAME)[0].getElementsByTagName(lampTagName)[0];

  expect(lamp.style.backgroundColor).toBe(defaultValues.lampColorOn);
});

test('Should move coordinates right', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  const table = new Timetable(CLASS_NAME, { columnsInBoard: 7 });
  table._coordinates = [0, 7];
  table._goToStartFromRightSide();

  expect(table._coordinates.length).toBe(2);
  expect(table._coordinates[0]).toBe(49);
  expect(table._coordinates[1]).toBe(56);
});

test('Should move coordinates left', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  const table = new Timetable(CLASS_NAME, { columnsInBoard: 7 });
  table._coordinates = [0, 7];
  table._goToStartFromLeftSide();

  expect(table._coordinates.length).toBe(2);
  expect(table._coordinates[0]).toBe(-7);
  expect(table._coordinates[1]).toBe(0);
});

test('Should return 0 images', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  const table = new Timetable(CLASS_NAME, { columnsInBoard: 7 });
  const lamps = table._getLampsFromDOM();

  expect(lamps.length).toBe(0);
});

test('Should return images', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  const table = new Timetable(CLASS_NAME, { columnsInBoard: 7 });
  const lamps = table._getLampsFromDOM();

  expect(lamps.length).toBe(49);
});

test('Should switch image background color', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;

  const color = 'yellow';
  const table = new Timetable(CLASS_NAME);

  const div = document.getElementsByClassName(CLASS_NAME)[0];
  let image = div.getElementsByTagName(lampTagName)[0];

  expect(image.style.backgroundColor).toBe('rgb(7, 84, 41)');
  table._switchImageBackgroundColor(0, color);
  expect(image.style.backgroundColor).toBe(color);
});
