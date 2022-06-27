/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let maxN = n.split('');
    return Math.max(...maxN);
};