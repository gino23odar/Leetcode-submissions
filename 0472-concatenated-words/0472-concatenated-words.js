/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  const set = new Set(words);
  
  const helper = (word, num = 0) => {
    if (!word) return num > 1;  
    let tmp = "";
    for (let i = 0; i < word.length; i++) {
      tmp += word[i];
      if (set.has(tmp)) {
        let sub = word.substr(i+1);
        if (helper(sub, num + 1)) {
          return true;
        }
      }
    }
    return false;
  }
  
  const ans = [];
  words.forEach(w => {
    if (helper(w)) {
      ans.push(w);
    }
  });
  return ans;
};