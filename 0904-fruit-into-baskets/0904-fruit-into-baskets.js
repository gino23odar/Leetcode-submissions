/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  let i = 0, j = 0, lastIndex = {}, max = 1;
  while (j < fruits.length) {
    lastIndex[fruits[j]] = j
    let l = Object.keys(lastIndex).length
    if (l > 2) {
      let minIdx = Math.min(...Object.values(lastIndex))
      let lastFruitToRemove = Object.keys(lastIndex).find(key => lastIndex[key] === minIdx);
      i = minIdx + 1
      delete lastIndex[lastFruitToRemove]
    }
    max = Math.max(max, j - i + 1)
    j++
  }
  return max
};