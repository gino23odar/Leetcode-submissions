/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let longest = 0;
    let map = {};
    
    for(const letter of s){
        map[letter] = (map[letter] || 0) + 1;
        if(map[letter] % 2 == 0) longest += 2;
    }
    return longest < s.length? longest + 1 : longest;
};