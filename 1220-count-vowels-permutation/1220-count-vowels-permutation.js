/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    const max = 1e9 + 7;
    const rules = [[0,1,1], [0,1,2], [0,1,4], [0,1,2], [0,1,1]];
    
    for(let i = 3; i <= n; i++){
        rules[0][i%3] = rules[1][(i-1) % 3] % max;
        rules[1][i % 3] = (rules[0][(i - 1) % 3] + rules[2][(i - 1) % 3]) % max;
        rules[2][i % 3] = (rules[0][(i - 1) % 3] + rules[1][(i - 1) % 3] + rules[3][(i - 1) % 3] + rules[4][(i - 1) % 3]) % max;
    rules[3][i % 3] = (rules[2][(i - 1) % 3] + rules[4][(i - 1) % 3]) % max;
    rules[4][i % 3] = rules[0][(i - 1) % 3] % max;
    }
    return rules.reduce((sum, sub) => sum + sub[n%3], 0) % max;
};