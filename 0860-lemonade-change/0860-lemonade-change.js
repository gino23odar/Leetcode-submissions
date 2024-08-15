/**
 * @param {number[]} bills
 * @return {boolean}
 */

var lemonadeChange = function(bills) {
    let change = {
        5: 0,
        10: 0,
    }
    let register = 0;
    
    for(let i = 0; i < bills.length; i++){
        change[bills[i]]++;
        register += bills[i];
        if(bills[i] == 5) continue;
        if(bills[i] == 10){
            if(change[5] > 0){
                change[5]--;
            } else {
                return false
            }
        }
        if(bills[i] == 20){
            if(change[10] > 0 && change[5] > 0){
                change[10]--;
                change[5]--;
            } else if (change[5] > 2){
                change[5] -= 3
            } else {
                return false
            }
        }
    }
    return true
};