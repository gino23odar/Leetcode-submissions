/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    const counts = new Array(n).fill(0);
    
    // Adjacency matrix to keep track of connected cities
    const matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n).fill(0);
    }
    
    // Count roads per city and mark connected cities
    for (const [city1, city2] of roads) {
        counts[city1]++;
        counts[city2]++;
        matrix[city1][city2] = 1;
        matrix[city2][city1] = 1;
    }
    
    // Find max rank
    let max = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            const rank = counts[i] + counts[j] - matrix[i][j];
            max = Math.max(max, rank);
        }
    }
    
    return max;

};