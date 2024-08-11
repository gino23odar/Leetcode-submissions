/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0, r = s.length-1;
    const regex = /^[a-z0-9]+$/;
    s = s.toLowerCase();
    console.log(s)
    
    while(l < r){
        if(!regex.test(s[l])){
            l++;
            continue;
        }
        if(!regex.test(s[r])){
            r--;
            continue;
        }
        if(s[l] !== s[r]) return false;
        l++;
        r--;
        
    }
    return true
};