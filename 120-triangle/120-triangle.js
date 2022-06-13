/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const n = triangle.length;
    const minPath = triangle[n-1];
    for(let row=n-2; row >=0; row--) {
        for(let i=0; i<=row; i++) {
            minPath[i] = Math.min(minPath[i], minPath[i+1]) + triangle[row][i];
        }
    }
    
    return minPath[0];
};