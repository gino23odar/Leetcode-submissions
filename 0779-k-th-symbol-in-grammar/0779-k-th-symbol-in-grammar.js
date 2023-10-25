/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    return halfit(n, k-1);
};

const halfit = (n, pos) =>{
    if(n === 1) return '0';
    const half = pos >> 1;
    const prev = halfit(n-1, half);
    
    if(prev == '1'){
        if(pos % 2 === 1) return 0
        else return 1;
    } else {
        if(pos % 2 === 1) return 1
        else return 0;
    }
}