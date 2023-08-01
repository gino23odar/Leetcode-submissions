/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  function backtrack(start, path) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  const result = [];
  backtrack(1, []);
  return result;
};