/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const arr = obstacleGrid;
  const m = arr.length;
  const n = arr[0].length;
  
  if (arr[0][0] === 1) return 0;
  
  arr[0][0] = 1;
  for (let i = 1; i < m; i++) {
    arr[i][0] = (arr[i][0] === 0 && arr[i - 1][0] === 1) ? 1 : 0;
  }
  for (let j = 1; j < n; j++) {
    arr[0][j] = (arr[0][j] === 0 && arr[0][j - 1] === 1) ? 1 : 0;
  }
  
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (arr[i][j] === 0) {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
      } else {
        arr[i][j] = 0;
      }
    }
  }
  
  return arr[m - 1][n - 1];
};