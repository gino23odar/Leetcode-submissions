/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
  trees.sort((b, a) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  let stack = [];

  const checkDistance = (arr, newCoor) =>
    (arr[1][1] - arr[0][1]) * (newCoor[0] - arr[1][0]) <
    (arr[1][0] - arr[0][0]) * (newCoor[1] - arr[1][1]);

  for (let each of trees) {
    while (stack.length >= 2 && checkDistance(stack.slice(-2), each))
      stack.pop();
    stack.push(each);
  }

  for (let i = trees.length - 1; i >= 0; i--) {
    while (stack.length >= 2 && checkDistance(stack.slice(-2), trees[i]))
      stack.pop();
    stack.push(trees[i]);
  }
    
  return [...new Set(stack.map(JSON.stringify))].map(JSON.parse); 
};