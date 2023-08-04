/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dic = new Set(wordDict)
  const start = 0
  let queue = [start]
  const seen = new Set()
  while(queue.length){
    const next = []
    for(let idx of queue){
      if(seen.has(idx)) continue
      let temp = ''
      if(idx === s.length) return true
      for(let i = idx; i < s.length; i++){
        temp += s[i]
        if(dic.has(temp)){
          next.push(i+1)
        }
      }
      seen.add(idx)
    }
    queue = next
  }
  return false
};