const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertArraysEqual = require('./assertArraysEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKeyByValue');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  eqArrays,
  eqObjects,
  assertArraysEqual,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  letterPositions,
  flatten,
  map,
  takeUntil,
  without
};