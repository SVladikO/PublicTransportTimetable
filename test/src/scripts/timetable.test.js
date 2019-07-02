
'use strict';

const Timetable = require('../../../src/scripts/timetable.js');
const Character = require('../../../src/scripts/character.js');
const CLASS_NAME = 'table';

test('Should prepare environment without errors', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  new Timetable(CLASS_NAME).init();
});

test('Should throw errors', () => {
  expect(() => new Timetable().init()).toThrow();
});

test('Should create correct images amount', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  new Timetable(CLASS_NAME, { columns: 1 }).init();
  const div = document.getElementsByClassName(CLASS_NAME)[0];
  const images = div.getElementsByTagName('IMG');
  expect(images.length).toBe(7)
});

test('Should delete backgroundColor for all images', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;

  const character = '.';
  const position = Character['eng'][character][0];

  const color = 'red';
  const table = new Timetable(CLASS_NAME, { columns: 1, color }).init();
  table.show(character);

  const div = document.getElementsByClassName(CLASS_NAME)[0];
  const images = div.getElementsByTagName('IMG');

  expect(images[position].style.backgroundColor).toBe(color);
  table.clear();
  expect(images[position].style.backgroundColor).toBe('');
});

test('Should watch click in createCharacter()', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  Timetable.createCharacter(CLASS_NAME)

  const div = document.getElementsByClassName(CLASS_NAME)[0];
  let image = div.getElementsByTagName('img')[0];

  expect(image.style.backgroundColor).toBe('');
  image.click();
  image = document.getElementsByClassName(CLASS_NAME)[0].getElementsByTagName('img')[0];

  expect(image.style.backgroundColor).toBe('chartreuse');
});

test('Should move coordinates right', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  const table = new Timetable(CLASS_NAME, { columns: 7 }).init();
  table._coordinates = [0, 7];
  table._goToStartFromRightSide();

  expect(table._coordinates.length).toBe(2);
  expect(table._coordinates[0]).toBe(49);
  expect(table._coordinates[1]).toBe(56);
});

test('Should move coordinates left', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  const table = new Timetable(CLASS_NAME, { columns: 7 }).init();
  table._coordinates = [0, 7];
  table._goToStartFromLeftSide();

  expect(table._coordinates.length).toBe(2);
  expect(table._coordinates[0]).toBe(-7);
  expect(table._coordinates[1]).toBe(0);
});

test('Should return 0 images', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  const table = new Timetable(CLASS_NAME, { columns: 7 });
  const images = table._getImgFromDOM(CLASS_NAME);

  expect(images.length).toBe(0);
});

test('Should return images', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  const table = new Timetable(CLASS_NAME, { columns: 7 }).init();
  const images = table._getImgFromDOM(CLASS_NAME);

  expect(images.length).toBe(49);
});


test('Should switch image background color', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;

  const color = 'yellow';
  const table = new Timetable(CLASS_NAME).init();

  const div = document.getElementsByClassName(CLASS_NAME)[0];
  let image = div.getElementsByTagName('img')[0];

  expect(image.style.backgroundColor).toBe('');
  table._switchImageBackgroundColor(0, color);
  expect(image.style.backgroundColor).toBe(color);
});
