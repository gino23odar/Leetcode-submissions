/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  const width = strs[0].length;
  let ans = 0;
  for (let i = 0; i < width; i++) {
    ans += isSorted(strs.map(r => r[i])) ? 0 : 1;
  }
  return ans;
};

const isSorted = col => {
  for (let i = 0; i < col.length; i++) {
    if (i !== 0 && col[i] < col[i - 1]) return false;
  }
  return true;
};