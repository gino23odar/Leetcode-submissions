/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let arr = num.toString().split('');
    
    if(arr.includes('6')){
        let idx = arr.indexOf('6');
        arr[idx] = '9';
        return arr.join('')
    } else {
        return num;
    }
};