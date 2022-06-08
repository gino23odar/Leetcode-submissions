/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let ans = [];
    candidates.sort((a,b) => a - b);
    let backt = (cur, start, sum) => {
        if(sum >= target){
            if(sum === target){
                ans.push(cur);
            }
            return;
        }
        for(let i = start; i < candidates.length; i++){
            if(i > start && candidates[i] === candidates[i-1]){
                continue;
            }
            cur.push(candidates[i]);
            backt(cur.slice(), i + 1, sum + candidates[i]);
            cur.pop();
        }
    }
    backt([], 0, 0);
    return ans;
};