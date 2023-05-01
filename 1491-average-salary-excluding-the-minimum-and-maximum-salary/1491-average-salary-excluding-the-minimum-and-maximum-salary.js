/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let len = salary.length - 2;
    let max = Math.max(...salary);
    let min = Math.min(...salary);
    let sum = salary.reduce((a,b) => a + b);
    let avg = (sum - max - min)/ len;
    return avg;
};