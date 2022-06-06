/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var ans = Array(num1.length + num2.length).fill(0);
    for(var i = num2.length - 1; i >= 0; i--){
        var index = num1.length + i;
        var carry = 0;
        for(var j = num1.length - 1; j >= 0; j--){
            let prod = num2[i] * num1[j] + carry + ans[index];
            ans[index] = prod % 10;
            carry = (prod - ans[index]) / 10;
            index--;
        }
        ans[index] += carry;
    }
    return ans.join('').replace(/^0+(.)/, '$1');
};