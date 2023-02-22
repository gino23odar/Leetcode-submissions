/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    function getDays(capacity) {
        let totD = 1, total = 0;
        
        for(let n of weights) {
            total += n;
            if(total > capacity) {
                total = n;
                totD++;
            }
        }
        return totD;
    }
    
    let start = Math.max(...weights), 
        end = weights.reduce((acc, cur) => acc + cur, 0);
    
    while(start < end) {
        const mid = Math.floor((end+start)/2);
        const totD = getDays(mid);
        if(totD > days) start = mid+1;
        else end = mid;
    }
    return end;
};