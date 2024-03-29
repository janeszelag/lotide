const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {

    if (!Array.isArray(arr1[i]) && !Array.isArray(arr2[i])) {
      
      if (arr1[i] !== arr2[i]) {
        return false;
      }

    } else if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      let result = eqArrays(arr1[i], arr2[i]);
      if (!result) {
        return false;
      }
        
    } else if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
      return false;
    }
  }

  return true;
};
//console.log(eqArrays([1, 2, 3], [1, 2, 3, 4]));


//assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true);

module.exports = eqArrays;

