/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let l =0, r = s.length-1;
    while(l<r){
        if(s[l]===s[r]){
            while(l<r&&s[l]===s[l+1]){
                l++;
            }
            while(l<r&&s[r]===s[r-1]){
                r--;
            }
            l++;
            r--;
        } else {
            let length = s.substring(l,r+1).length;
            return length;
        }
    }
    if(l===r) return 1;
    return 0;
};