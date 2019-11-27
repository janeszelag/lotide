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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function(array) {
  let newArray = [];
  array.forEach(function(element) {
    if (Array.isArray(element) === false) {
      newArray.push(element);
    } else {
      for (let i = 0; i < element.length; i++) {
        newArray.push(element[i]);
      }
    }
  });
  return newArray;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);