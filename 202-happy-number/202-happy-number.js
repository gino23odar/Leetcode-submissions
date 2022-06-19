/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slw = n, fst = n;
    
    do{
        slw = sqrS(slw);
        fst = sqrS(sqrS(fst));
    } while(fst !== slw);
    
    return fst === 1;
};

const sqrS = (num) =>{
    let sum = 0;
    while(num){
        sum += (num % 10) * (num % 10);
        num = parseInt(num / 10);
    }
    return sum;
}