/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    let map = new Map();
    if(map.size<=0){
     let pow = 0, res = Math.pow(2,pow);
        while(res<=1000000000){
            res = Math.pow(2, pow);
            let arr = map.get(res.toString().length) || new Array();
            arr.push(res);
            map.set(res.toString().length, arr);
            pow++;
        }
    }
    
    let arr = map.get(n.toString().length);
    n = n.toString().split('').sort((a,b) => a - b).join('');
    for(let val of arr){
        if(val.toString().split('').sort((a,b) => a - b).join('') == n)
            return true;
    }
    return false;
};