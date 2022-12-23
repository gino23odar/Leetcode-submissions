/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices == null || prices.length === 0) return 0;

  let sold = 0;
  let hold = -Infinity;
  let rest = 0;

  for (let p of prices) {
    hold = Math.max(hold, rest - p);
    rest = Math.max(rest, sold);
    sold = hold + p;
  }

  return Math.max(sold, rest);
};