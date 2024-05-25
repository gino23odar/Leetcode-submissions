/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const wB = (s, dict, cur = [], res = []) => {
        if (!s.length) return res.push(cur.join(' '));
        for (let word of dict) {
            if (!s.startsWith(word)) continue;
            cur.push(word);
            wB(s.slice(word.length), dict, cur, res);
            cur.pop();
        }
        return res;
    }
    return wB(s,wordDict)
};