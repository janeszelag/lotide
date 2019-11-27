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
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4]));
//console.log(middle([1]));