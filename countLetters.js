// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function(string) {
  let letterObject = {};
  let noSpaces = string.toLowerCase().split(" ").join("");

  for (let letter of noSpaces) {
    if (letterObject[letter]) {
      letterObject[letter] += 1;
    } else {
      letterObject[letter] = 1;
    }
  }
  return letterObject;
};
console.log(countLetters("lighthouse in the house"));

// console.log(assertEqual(countLetters("lighthouse in the house"), {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }));

// let obj = {
//   car: 2
// };
// obj.car += 1;

// console.log(obj);
// console.log(typeof(obj.car));