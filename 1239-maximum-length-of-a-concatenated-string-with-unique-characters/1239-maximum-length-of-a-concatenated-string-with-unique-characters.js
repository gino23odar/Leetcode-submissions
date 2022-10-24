/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  let res = 0;

  const dp = (idx, cur) => {
    res = Math.max(res, cur.length);
    
    for (let i = idx; i < arr.length; i++) {
      
      const unique = !!([...cur, ...arr[i]].reduce((set, char) => {
        if (!set || set.has(char)) return false;
        return set.add(char)
      }, new Set())); 
      
      if (unique) dp(i + 1, cur + arr[i]);
    }
  }

  dp(0, '');
  return res;
};