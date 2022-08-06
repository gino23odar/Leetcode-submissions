/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    let tests = minutesToTest / minutesToDie;
    for(let x = 0; x < buckets; x++){
        if(Math.pow(tests + 1, x) >= buckets) return x;
    }
};