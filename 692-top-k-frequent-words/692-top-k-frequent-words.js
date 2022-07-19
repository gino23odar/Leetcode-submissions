/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = new Map(), ans = [];
    for(let i = 0; i < words.length; i++){
        if(map.has(words[i])){
            map.set(words[i], map.get(words[i]) + 1);
        } else {
            map.set(words[i], 1);
        }
    }
    const mapSort1 = Array.from(map.entries()).sort(
        ([aName, aNumber], [bName, bNumber]) => {
            if (aNumber === bNumber) {
                if (aName < bName) return -1;
            return 1;
            } else if (aNumber > bNumber) return -1;
                return 1;
        }
    )
    for(let i = 0; i < k; i++){
        ans.push(mapSort1[i][0]);
    }
    return ans;
};