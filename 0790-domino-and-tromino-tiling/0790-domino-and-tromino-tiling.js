/**
 * @param {number} n
 * @return {number}
 */
const MOD = 1000000007;

var numTilings = function(n) {
  const cash = new Map([[1,1],[2,2],[3,5]])
  const count = (n) => {
    if (!cash.has(n)) cash.set(n, count(n-1)*2 + count(n-3))
    return cash.get(n) % MOD
  }
  return count(n)
};