const letterPositions = function(sentence) {
  let results = {};
  for (i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (results[letter]) {
      results[letter].push(i);
    } else if (letter !== ' ') {
      results[letter] = [i];
    }
  }
  return results;
}

console.log(letterPositions("lighthouse in the house"));

// let string = 'happy';
// let obj = {
//   a: ''
// };

// obj[string[1]] += 'yes';

// console.log(obj);

// // for (const index of happy) {
// //   if (obj[happy])
// // }