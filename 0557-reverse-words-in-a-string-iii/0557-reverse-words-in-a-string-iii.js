/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    for(let word in arr){
        //let niu = arr[word].split('').reverse().join('');
        //arr[word] = niu;
        arr[word] = arr[word].split('').reverse().join('')
    }
    return arr.join(' ')
};