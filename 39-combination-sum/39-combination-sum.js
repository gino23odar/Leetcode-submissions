/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let out = [];
    candidates.sort((a,b) => a - b);
    
    function backt(tmp, rest, start){
        for(let i = start; i < candidates.length && candidates[i] <= rest; i++){
            if(candidates[i] === rest){
                out.push([...tmp,  candidates[i]]);
            } else {
                backt([...tmp, candidates[i]], rest - candidates[i], i);
            }
        }
    }
    backt([], target, 0);
    return out;
};