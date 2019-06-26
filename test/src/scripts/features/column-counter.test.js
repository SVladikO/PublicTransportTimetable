'use strict';

const ColumnCounter = require('../../../../src/scripts/features/column-counter.js');

test('Should return 0 if we did not call other methods', function () {
  let counter = new ColumnCounter();
  expect(counter.get()).toBe(0);
});

test('Should return correct count after one call this.increment()', function () {
  let counter = new ColumnCounter();
  counter.increment();
  expect(counter.get()).toBe(7);
});

test('Should return correct count after call this.add())', function () {
  let counter = new ColumnCounter();
  counter.add([5]);
  expect(counter.get()).toBe(14);
});

test('Should return correct counter', function () {
  let counter = new ColumnCounter();
  counter.add([0]);
  expect(counter.get()).toBe(14);
});

test('Should throw Error on empty array', function () {
  let counter = new ColumnCounter();
  expect(() => counter.add([])).toThrow();
});

test('Should throw Error when param is object', function () {
  let counter = new ColumnCounter();
  expect(() => counter.add({})).toThrow();
});

test('Should throw Error when param is missed', function () {
  let counter = new ColumnCounter();
  expect(() => counter.add()).toThrow();
});