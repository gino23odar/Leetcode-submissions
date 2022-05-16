/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var windowInit = 0;
    var longest = 0;
    
    var charMap = new Map();
    
    for(let i = 0; i < s.length; i++){
        let currChar = s[i];
        let position = charMap.get(currChar);
        
        if(position >= windowInit){
            windowInit = position + 1;
        }
        charMap.set(currChar, i);
        longest = Math.max(longest, i  - windowInit + 1);
    }
    return longest;
};