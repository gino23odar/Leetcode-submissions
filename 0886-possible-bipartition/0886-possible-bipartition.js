/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
  let map = {};
  let group = new Array(n).fill(0);

  for (let [a, b] of dislikes) {
    if (map.hasOwnProperty(a)) {
      map[a].push(b);
    } else {
      map[a] = [b];
    }

    if (map.hasOwnProperty(b)) {
      map[b].push(a);
    } else {
      map[b] = [a];
    }
  }

  for (let i = 1; i <= n; i++) {
    if (group[i - 1] === 0 && !helper(i, map, group, 1)) {
      return false;
    }
  }

  return true;
};

let helper = (person, map, group, belong) => {
  if (group[person - 1] !== 0) {
    if (group[person - 1] !== belong) {
      return false;
    } else
      return true;
  }

  if (!map.hasOwnProperty(person)) {
    group[person - 1] = belong;
    return true;
  }

  group[person - 1] = belong;

  for (let val of map[person]) {
    if (!helper(val, map, group, -1 * belong)) {
      return false;
    }
  }

  return true;
};