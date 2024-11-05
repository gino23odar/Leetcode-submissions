/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let l = 0;
    let r = num;
    
    while(l <= r){
        let ps = l + Math.floor((r-l)/2);
        let ch = ps * ps;
        
        if(ch == num){
            return true;
        } else if(ch > num){
            r = ps - 1;
        } else {
            l = ps + 1;
        }
    }
    return false
};