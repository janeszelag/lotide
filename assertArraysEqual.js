const eqArrays = function(arr1, arr2) {
  let longestLength = 0;
  if (arr1.length > arr2.length) {
    longestLength = arr1.length;
  } else {
    longestLength = arr2.length;
  }
  for (i = 0; i < longestLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true; 
} 

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
}
assertArraysEqual([1, 2, 3], [1, 2, 3]); 