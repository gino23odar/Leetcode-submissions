/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
  if (arrLen === 1) {
    return 1
  }
  let preRecord = Array(arrLen).fill(0)
  let curRecord = Array(arrLen)
  preRecord[0] = 1
  const mod = 10 ** 9 + 7

  for (let step = 1; step <= steps; step++) {
    for (let i = 0; i < steps; i++) {
      if (i === 0) {
        curRecord[i] = (preRecord[i] + preRecord[i + 1]) % mod
      } else if (i === arrLen - 1) {
        curRecord[i] = (preRecord[i - 1] + preRecord[i]) % mod
      } else {
        curRecord[i] = (preRecord[i - 1] + preRecord[i] + preRecord[i + 1]) % mod
      }
    }
    preRecord = curRecord.slice()
  }
  return curRecord[0]
};