/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;  // If there's only one row, the string is not converted

  const rows = [];  // Create an array of numRows empty rows
  for (let i = 0; i < numRows; i++) rows.push([]);

  let row = 0;
  let goingDown = false;

  // Loop through the string, adding each character to the appropriate row
  for (let i = 0; i < s.length; i++) {
    rows[row].push(s[i]);  // Add the character to the current row
    if (row === 0 || row === numRows - 1) goingDown = !goingDown;  // Flip the direction when we reach the top or bottom row
    row += goingDown ? 1 : -1;  // Move to the next row in the appropriate direction
  }

  // Concatenate the characters in each row to get the converted string
  let result = "";
  for (let i = 0; i < rows.length; i++) result += rows[i].join("");
  return result;
};