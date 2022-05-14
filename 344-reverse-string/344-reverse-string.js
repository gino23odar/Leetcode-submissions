/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    s.reverse();
    
    /* why would I do this?
    let sLength = s.length - 1;
    let i = 0;
    while(i < sLength/2){
        let temp = s[i];
        s[i] = s[sLength -i];
        s[sLength - i] = temp;
        i++;
    }
    */
};