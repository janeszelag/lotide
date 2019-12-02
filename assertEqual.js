const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length !== expected.length) {
      console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
    }
    else if (actual[0] !== expected [0]) {
      console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`)
    } else {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    }
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;


//Notice how we are passing the variable assertEqual 
//(which points to our function) and not calling assertEqual via assertEqual() here. 
//This is an important distinction.