/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    if(num2.length > num1.length) return addStrings(num2, num1);
    
    let i = num1.length -1;
    let j = num2.length -1;
    let res = '', tran = 0;
    
    while(i >= 0){
        const dig1 = num1.charAt(i) - '0';
        const dig2 = j < 0? 0 : num2.charAt(j) - '0';
        
        let sum = tran + dig1 + dig2;
        tran = 0;
        if(sum > 9){
            tran = 1;
            sum %= 10;
        }
        res = `${sum.toString()}${res}`;
        i -= 1;
        j -= 1;
    }
    if(tran > 0) res = `${tran.toString()}${res}`;
    return res;
};