/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const result = [1];
    let cur2 = 0;
    let cur3 = 0;
    let cur5 = 0;
    while (result.length < n) {
        const num1 = result[cur2] * 2;
        const num2 = result[cur3] * 3;
        const num3 = result[cur5] * 5;
        const smallest = Math.min(num1, num2, num3);
        result.push(smallest);
        if (smallest % 2 === 0) {
            cur2++;
        }
        if (smallest % 3 === 0) {
            cur3++;
        }
        if (smallest % 5 === 0) {
            cur5++;
        } 
    }
    return result[n -1];
};