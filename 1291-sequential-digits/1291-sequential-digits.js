/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let res = [];
    let base = '123456789';
    for(let i = 2; i <= 9; i++) {
        for(let j = 0; j <= 9-i; j++) {
            const num = Number(base.slice(j, j + i));
            //console.log(num, i)
            if (num >= low && num <= high) res.push(num);
    }
  }
  return res;
};