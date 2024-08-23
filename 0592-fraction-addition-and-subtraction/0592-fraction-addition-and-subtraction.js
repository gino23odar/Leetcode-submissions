/**
 * @param {string} expression
 * @return {string}
 */
var getGreatCommonDenominator = function (a, b) {
    if (!b) {
        return a;
    }
    return getGreatCommonDenominator(b, a % b);
};

var fractionAddition = function (expression) {
    let s = expression.match(/\D?\d*\/\d*/g) || [];
    //console.log(s)
    let nums = [];
    s.forEach(it => nums = nums.concat(it.replace('+', '').split('/').map(Number)))
    //console.log(nums)
    let denominator = 1;
    let numerators = [];
    for (let i = 0; i < nums.length; i += 2) {
        denominator *= nums[i + 1];
    }
    for (let i = 0; i < nums.length; i += 2) {
        numerators.push(nums[i] * denominator / nums[i + 1]);
    }
    let numerator = numerators.reduce((acc, it) => acc + it);
    let gcd = getGreatCommonDenominator(denominator, numerator)
    numerator = numerator / gcd;
    denominator = denominator / gcd;
    //console.log({ numerators, denominator, numerator, gcd });

    if (numerator % denominator === 0) {
        return `${numerator / denominator}/1`
    } else if (denominator % numerator === 0) {
        return denominator * numerator < 0 ? `-1/${Math.abs(denominator / numerator)}` : `1/${denominator / numerator}`;
    } else {
        return denominator * numerator < 0 ? `-${Math.abs(numerator)}/${Math.abs(denominator)}` : `${numerator}/${denominator}`;
    }
};