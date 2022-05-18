/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mProfit = 0;
    let minPrice = prices[0];
    
    for(let i = 1; i < prices.length; i++){
        let sPrice = prices[i];
        let profit = sPrice - minPrice;
        
        mProfit = Math.max(mProfit, profit);
        if(sPrice < minPrice) minPrice = sPrice;
    }
    return mProfit;
};