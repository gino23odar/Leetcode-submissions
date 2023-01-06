/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let amount = 0;
    costs.sort((a, b) => a - b);
    for(let i = 0; i < costs.length; i++){
        if(costs[i] <= coins){
            amount += 1;
            coins = coins - costs[i];
        } else {
            break;
        }
    }
    return amount;
};