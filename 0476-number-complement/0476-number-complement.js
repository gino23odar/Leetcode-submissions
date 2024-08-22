/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bin = num.toString(2);
    let comp = ''
    
    for(let i = 0; i < bin.length; i++){
        if(bin[i] == '0'){
            comp  += '1'
        } else {
            comp += '0'
        }
    }
    
    let ans = parseInt(comp,2);
    return ans;
};