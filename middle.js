const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  let newArray = [];
  let arrayLength = array.length;
  let middleIndex = arrayLength / 2 - 1;
  if (arrayLength <= 2) {
    return newArray;
  } else if (arrayLength % 2 === 0) {
    newArray.push(array[middleIndex]);
    newArray.push(array[middleIndex + 1]);
  } else {
    newArray.push(array[Math.ceil(middleIndex)]);
  }
  return newArray;
}



module.exports = middle; 