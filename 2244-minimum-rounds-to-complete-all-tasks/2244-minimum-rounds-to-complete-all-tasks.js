/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
  const count = {};
  for (const t of tasks) {
    if (!count[t]) {
      count[t] = 0;
    }
    count[t] += 1;
  }
  let rounds = 0;
  for (const num of Object.values(count)) {
    if (num === 1) {
      return -1;
    }
    rounds += Math.ceil(num / 3);
  }
  return rounds;
};