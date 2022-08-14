/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = (beginWord, endWord, wordList) => {
    let dic = new Set(wordList);
    if (!dic.has(endWord)) return [];
    dic.delete(beginWord);
    dic.delete(endWord);
    let steps = new Map([[beginWord, 1]]);
    let parents = new Map();
    let q = [beginWord];
    let bn = beginWord.length;
    let step = 0;
    let found = false;
    while (q.length && !found) {
        step++;
        let t = q.length;
        while (t--) {
            let p = q.shift();
            let w = p;
            for (let i = 0; i < bn; i++) {
                let ch = w[i];
                for (let j = 0; j < 26; j++) {
                    let c = String.fromCharCode(j + 97);
                    if (c == ch) continue;
                    w = ups(w, i, c);
                    if (w == endWord) {
                        operate(parents, w, p);
                        found = true;
                    } else {
                        if (steps.has(w) && step < steps.get(w)) {
                            operate(parents, w, p);
                        }
                    }
                    if (!dic.has(w)) continue;
                    dic.delete(w);
                    q.push(w);
                    steps.set(w, steps.get(p) + 1 || 1);
                    operate(parents, w, p);
                }
                w = ups(w, i, ch);
            }
        }
    }

    let res = [];
    if (found) {
       let path = [endWord];
       dfs(endWord, beginWord, parents, path, res);
    }
    return res;
};

const ups = (s, i, c) => s.slice(0, i) + c + s.slice(i + 1); // update string in index i

const dfs = (target, cur, parents, path, res) => { // DFS to get each path
    if (target == cur) return res.push([...path].reverse());
    for (const p of (parents.get(target) || [])) {
        path.push(p);
        dfs(p, cur, parents, path, res);
        path.pop();
    }
};

const operate = (parents, w, p) => { // push all parents to node
    if (!parents.has(w)) parents.set(w, []);
    parents.get(w).push(p);
};