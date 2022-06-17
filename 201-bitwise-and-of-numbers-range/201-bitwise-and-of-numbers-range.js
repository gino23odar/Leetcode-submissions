/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let shifts = 0;
    while(left != right){
        left >>= 1;
        right >>= 1;
        shifts++;
    }
    console.log(left);
    return left << shifts;
};