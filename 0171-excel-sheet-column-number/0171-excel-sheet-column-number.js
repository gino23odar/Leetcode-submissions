/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {    
    let num = 0, len = columnTitle.length;
    
    for(let i = 0; i < len; i++){
        let val = columnTitle.charCodeAt(i)-64;
        num += val * Math.pow(26, len-1-i)
    }
    
    return num
};