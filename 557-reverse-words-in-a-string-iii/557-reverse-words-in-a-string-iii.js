/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let strArr = s.split(" ");
    let i = 0;
    while(i < strArr.length){
        strArr[i] = strArr[i].split("").reverse().join("");
        i++;
    }
    return strArr.join(" ");
    
};