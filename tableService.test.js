'use strict';

jest.mock('./src/scripts/tableService');

const TableService = require('./src/scripts/tableService');
const Character = require('./src/scripts/character');
const CLASS_NAME = 'table';


test('Should prepare environment without errors', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  new TableService(CLASS_NAME);
});
