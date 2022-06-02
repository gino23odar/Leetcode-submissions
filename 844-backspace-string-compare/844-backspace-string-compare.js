/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return red(s) === red(t);
};

const red = (str) => {
    if(str === null) return '';
    for(let i = 0; i < str.length; i++){
        if(str[i] === '#'){
            if(i > 0){
                str = str.slice(0, i - 1) + str.slice(i+1);
                i -= 2;
            } else {
                str = str.slice(1);
                i--;
            }
        }
    }
    return str;
}