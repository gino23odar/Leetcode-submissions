/**
 * @param {string} s
 * @return {number}
 */

const romToNum = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  };

var romanToInt = function(s) {
    let ans = 0, cur = 0, prev = 0
    for(let j = s.length - 1 ; j >= 0; j-=1){
        cur = romToNum[s[j]]
        cur < prev ? ans -= cur : ans += cur
        prev = cur
    }
    return ans;  
};