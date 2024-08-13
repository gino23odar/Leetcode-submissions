/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];
    candidates.sort((a,b) => a - b);

    const backTrack = (start, path, get) => {

        if(get === 0) {
            result.push([...path]);
            return;
        }

        if(get < 0) {
            return;
        }

        for(let i = start; i < candidates.length; i++) {
            if(i > start && candidates[i] === candidates[i-1]) {
                continue;
            }

            if(candidates[i] > get) {
                break;
            } 

            path.push(candidates[i]);
            backTrack(i+1, path, get - candidates[i]);
            path.pop();
        }

    }

    backTrack(0,[], target);
    return result;
};