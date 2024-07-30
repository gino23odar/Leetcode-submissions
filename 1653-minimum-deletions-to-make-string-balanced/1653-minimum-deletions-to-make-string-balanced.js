/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let prefix =0, total =0;
    for (let i =0; i < s.length; i++) {
        if (s[i] =='a' && prefix > 0) {
            prefix--;
            total++;
        }else if (s[i] =='b') {
            prefix++;
        }
    }
    return total
};