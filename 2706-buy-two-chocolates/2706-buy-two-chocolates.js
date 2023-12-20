/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b) => a - b);
    let total = prices[0] + prices[1];
    if(money >= total){
        return money - total
    } else {
        return money
    }
};