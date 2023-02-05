/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const map = p.split('').reduce((map, e) => {
    if (map[e]) {
      map[e]++
    } else {
      map[e] = 1
    }
    return map
  }, {})
  const res = []
  function isInclude(a, map) {
    const arrA = a.split('')
    for (let i = 0; i < a.length; i++) {
      const e = a[i]
      if (map[e]) {
        map[e]--
      } else {
        return false
      }
    }
    return true
  }
  for (let i = 0; i <= s.length - p.length; i++) {
    if (map[s[i]] && isInclude(s.slice(i, i + p.length), Object.create(map))) {
      res.push(i)
    }
  }
  return res
};
    
