const assertEqual = require('../assertEqual');

const eqArrays = require('../eqArrays');




assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);// => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
//comparing [[2, 3], [4]]
//[[2, 3], [4, 5]]
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);