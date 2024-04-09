/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let count = 0;
    let i = 0;
    while(tickets[k] > 0){
        i = i % tickets.length;
        if(tickets[i] > 0){
            tickets[i]--;
            count++;
        }
        i++;
    }
    return count
};