/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let jobs = []
    for(let i = 0; i < difficulty.length; i++){
        jobs.push([difficulty[i],profit[i]])
    }
    jobs.sort((a,b) => {
        if(a[1] !== b[1]){
            return b[1] - a[1]
        }
        return a[0] - b[0]
    })
    // console.log(jobs)
    let maxP = 0
    for(let i = 0; i < worker.length; i++){
        for(let j = 0; j < jobs.length; j++){
            if(jobs[j][0] > worker[i]) continue;
            maxP += jobs[j][1];
            // console.log('job', jobs[j][1])
            // console.log(maxP)
            break;
        }
    }
    return maxP
};