/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
  let a = sentence.split(" ");
  let b = dictionary;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i].startsWith(b[j])) {
        a[i] = b[j];
      }
    }
  }

  return a.join(" ");
};