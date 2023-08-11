/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const table = Array(amount + 1).fill(0);
    table[0] = 1;
    for (let coin of coins) {
        for (let i = 0; i < table.length; i++) {
            if (coin <= i) {
                table[i] += table[i - coin];
            }
        }
    }
    return table[amount];
};