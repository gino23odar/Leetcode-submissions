/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
  let map = toMap(edges)
  let cache = new Map

  return new Array(n).fill(0).map((x, i) => count(i)[1])

  function count(i, not = n) {
    let cached = cacheGet(i, not)
    if (cached) return cached
    let num = 1, cnt = 0
    for (let node of map.get(i) || []) {
      if (node === i || node === not) continue
      let [n, c] = count(node, i)
      num += n
      cnt += c + n
    }
    cacheSet(i, not, [num, cnt])
    return [num, cnt]
  }

  function cacheSet(i, not, value) {
    if (!cache.has(i)) cache.set(i, new Map)
    cache.get(i).set(not, value)
  }

  function cacheGet(i, not) {
    if (!cache.has(i)) return 0
    return cache.get(i).get(not)
  }

  function toMap(edges) {
    let x = new Map
    for (let [f, t] of edges) {
      add(f, t)
      add(t, f)
    }
    return x
    function add(f, t) {
      if (!x.has(f)) x.set(f, new Set)
      x.get(f).add(t)
    }
  }
};