/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    if (jobDifficulty.length < d) return -1;
    const map = {};
    const dfs = (start, dNum) =>{
        if(dNum === d){
            return start === jobDifficulty.length ? 0 : Infinity;
        }
        const key = `${start}-${dNum}`; 
        if(map[key] !== undefined) return map[key];
        const end = jobDifficulty.length - d + dNum;
        let res = Infinity, max = -Infinity;
        for(let i = start; i <= end; i++){
            max = Math.max(max, jobDifficulty[i]);
            res = Math.min(res, max + dfs(i + 1, dNum + 1));
        }
        return map[key] = res;
    } 
    
    return dfs(0, 0);
};