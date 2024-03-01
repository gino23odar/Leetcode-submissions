/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let len = s.length;
    s = s.split('').sort((a, b) => b - a)
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] != 1) break;
        count++
    }
    if(count == 1){
        let res = [];
        for(let i = 0; i < len-1; i++){
            res.push('0')
        }
        res.push('1')
        return res.join('')
    }
    for(let i = 0; i < len-1; i++){
        if(count > 1){
            s[i] = '1';
        } else {
            s[i] = '0';
        }
        count--
    }
    s[s.length-1] = '1'
    return s.join('')
};