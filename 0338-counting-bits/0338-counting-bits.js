/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = [];
    for(let i = 0; i <= n; i++){
        let num = i;
        let onesCount = 0;
  
         while (num > 0) {
            onesCount += num & 1; // Use bitwise AND to check the last bit
            num >>= 1; // Right shift to check the next bit
         }

         res.push(onesCount);
    }
    return res
};