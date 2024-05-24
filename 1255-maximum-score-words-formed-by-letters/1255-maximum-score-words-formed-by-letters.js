/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
    let cnt = Array(26).fill(0), n = words.length, res = 0;
    for (const c of letters) cnt[c.charCodeAt() - 97]++;
    outer:
    for (let i = 0; i < 1 << n; i++) {
        let ncnt = Array(26).fill(0), sum = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                for (const c of words[j]) ncnt[c.charCodeAt() - 97]++;
            }
        }
        for (let j = 0; j < 26; j++) {
            if (ncnt[j] > cnt[j]) continue outer;
            sum += ncnt[j] * score[j];
        }
        res = Math.max(res, sum);
    }
    return res;
};