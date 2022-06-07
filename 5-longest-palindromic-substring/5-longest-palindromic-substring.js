/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let pal = [];
    
    for(let i = 0; i < s.length; i++){
        pal.push(s[0]);
        findPalindromes(s, i - 1, i + 1);
        findPalindromes(s, i, i + 1);
    }
    
    function findPalindromes(input, a, b){
        while(a >= 0 && b < input.length){
            if(input[a] != input[b]){
                break;
            }
            pal.push(input.substring(a, b+1));
            a--;
            b++;
        }
    }
    
    let longest = pal.reduce(
        function(a,b){
            return a.length > b.length ? a : b;
    })
    return longest;
};