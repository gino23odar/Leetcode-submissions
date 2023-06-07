/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    const getLSB = (num) =>{
        return num & 1;
    }
    if(a == 0 || b == 0 || c == 0) return 0;
    let count = 0;
    while(a > 0 || b > 0 || c > 0) {
        const aLSB = getLSB(a);
        const bLSB = getLSB(b);
        const cLSB = getLSB(c);
        
        if(cLSB === 1 && aLSB === 0 && bLSB === 0) {
            count += 1;
        } else if (cLSB === 0 && Boolean(aLSB ^ bLSB )) {
            count +=1;       
        } else if (cLSB === 0 && aLSB === 1 && bLSB === 1) {
            count +=2; 
        }
        a = a >> 1;
        b = b >> 1;
        c = c >> 1;
    }
    return count;
};