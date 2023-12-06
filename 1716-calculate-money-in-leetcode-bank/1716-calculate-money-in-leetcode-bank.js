/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let ans = 0;
    let last_monday = 1;
    let increment = 1;
    
    for(let day = 1; day <= n; day++){
        if(day % 7 == 1 && day != 1){
            last_monday++;
            increment = last_monday;
        }
        ans += increment;
        increment++;
    }
    return ans
};