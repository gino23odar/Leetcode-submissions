/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mProfit = 0;
    let minPrice = prices[0];
    
    for(let i = 1; i < prices.length; i++){
        let profit = prices[i] - minPrice;
        
        mProfit = Math.max(mProfit, profit);
        if(prices[i] < minPrice) minPrice = prices[i];
    }
    return mProfit;
};