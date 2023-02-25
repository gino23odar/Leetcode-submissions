/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 1) return 0;

    let currMax = 0;
    let buyP = 0;
    let sellP = 1;

    while (buyP < sellP && sellP < prices.length) {
        currMax = Math.max(currMax, prices[sellP]-prices[buyP]);

        if (prices[sellP] < prices[buyP]) buyP = sellP;
        sellP++;
    }

    return currMax <= 0 ? 0 : currMax;
};