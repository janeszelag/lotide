const eqArrays = function(arr1, arr2) {
  let longestLength = 0;
  if (arr1.length > arr2.length) {
    longestLength = arr1.length;
  } else {
    longestLength = arr2.length;
  }
  for (let i = 0; i < longestLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

}
const results1 = map(words, word => word[0]);
console.log(results1);


const cars = ['honda', 'toyota', 'porshe'];
//expected ['HONDA', 'TOYOTA', 'PORSHE']
assertArraysEqual(map(cars, car => car.toUpperCase()), ['HONDA', 'TOYOTA', 'PORSHE'])


const youTube = ['H3H3', 'Trisha', 'Joe Rogan'];
//expected ['H3H3 is great', 'Trisha is great', 'Joe Rogan is great']
assertArraysEqual(map(youTube, influencer => influencer += ' is great'), ['H3H3 is great', 'Trisha is great', 'Joe Rogan is great']);