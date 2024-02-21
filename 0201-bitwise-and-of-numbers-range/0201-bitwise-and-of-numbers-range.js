/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let count = 0;
    while(left != right){
        count++;
        left >>= 1;
        right >>= 1;
    }
    return left << count
};