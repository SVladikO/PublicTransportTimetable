
'use strict';

jest.mock('../../../src/scripts/timetable');

const TimetableMocked = require('../../../src/scripts/timetable');
const CLASS_NAME = 'table';

test('Should prepare environment without errors', () => {
  document.body.innerHTML = `<div class="${CLASS_NAME}"></div>`;
  new TimetableMocked(CLASS_NAME).init();
});
