/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let count0 = 0;
    let count1 = 0;
    let digit = false;
    
    for(let i = 0; i < s.length; i++){
        if(digit == false){
            if(s[i] == 1) count0++;
            digit = true
        } else {
            if(s[i] == 0) count0++;
            digit = false
        }
    }
    
    if( count0 == 0 ) return count0;
    
    digit = true;
    
    for(let i = 0; i < s.length; i++){
        if(digit == true){
            if(s[i] == 0) count1++;
            digit = false
        } else {
            if(s[i] == 1) count1++;
            digit = true
        }
    }

    return Math.min(count0,count1)
};