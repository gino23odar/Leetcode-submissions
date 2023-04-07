/**
 * @param {number[][]} grid
 * @return {number}
 */

const sea = 0;
const land = 1;
const visited = 2;

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1], 
];

var numEnclaves = function(grid) {
  let landCellCount = 0;
  const ROWS = grid.length;
  const COLS = grid[0].length;

  for (let row = 0; row < ROWS; row++) {
    if (grid[row][0] === land) visitLand(row, 0, false);
    if (grid[row][COLS - 1] === land) visitLand(row, COLS - 1, false);
  }

  for (let col = 0; col < COLS; col++) {
    if (grid[0][col] === land) visitLand(0, col, false);
    if (grid[ROWS - 1][col] === land) visitLand(ROWS - 1, col, false);
  }

  for (let row = 1; row < ROWS - 1; row++) {
    for (let col = 1; col < COLS - 1; col++) {
      if (grid[row][col] === land) {
        visitLand(row, col, true);
      }
    }
  }
    return landCellCount;

  function visitLand(row, col, isEnclave) {
    if (
      row >= grid.length ||
      col >= grid[0].length ||
      row < 0 ||
      col < 0 ||
      grid[row][col] !== land
    ) {
      return;
    }

    if (isEnclave) landCellCount++;
    grid[row][col] = visited; 
    for (const [rowDir, colDir] of directions) {
      visitLand(row + rowDir, col + colDir, isEnclave);
    }
  }
};