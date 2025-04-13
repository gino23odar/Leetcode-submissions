/**
 * @param {number} n
 * @return {number}
 */

var countGoodNumbers = function(n) {
    const MOD = 10n ** 9n + 7n;

    const modPow = (base, exp, mod) => {
        let result = 1n;
        base %= mod;

        while (exp > 0n) {
            if (exp % 2n === 1n) {
                result = (result * base) % mod;
            }
            base = (base * base) % mod;
            exp /= 2n;
        }
        return result;
    };

    let bigN = BigInt(n);
    let evens = (bigN + 1n) / 2n;
    let odds = bigN / 2n;

    let evenPart = modPow(5n, evens, MOD);
    let oddPart = modPow(4n, odds, MOD);

    return Number((evenPart * oddPart) % MOD);
};