'use strict';

const getImageSize = require('../../../../src/scripts/features/get-lamp-diameter.js');

test('Should work correct', function () {
  const result = getImageSize(8.2);
  expect(result).toBe(1);
});