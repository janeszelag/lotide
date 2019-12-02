const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1, array.length);
};

// let array1 = [];
// console.log(tail(array1));

module.exports = tail; 