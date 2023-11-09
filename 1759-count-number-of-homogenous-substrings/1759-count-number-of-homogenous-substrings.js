/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let counter=0;
    let currentString = "";
    for(let i = 0; i < s.length; i++){
        if(s[i] === currentString[0]){
            currentString += s[i];
            counter += currentString.length;
        } else {
            currentString = s[i];
            counter++;
        }
    }

    return counter%1000000007
};