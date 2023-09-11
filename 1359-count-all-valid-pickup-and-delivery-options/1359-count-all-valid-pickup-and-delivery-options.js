/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    var res = 1, modulo = 1000000007;
    for(let i=1; i<=n; i++){
        res = res * i * (2*i - 1) % modulo;
    }
    return res;
};