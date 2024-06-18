/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    worker.sort((a,b) => a - b);
    const jobs = [];

    for (let i = 0; i < profit.length; i++) {
        jobs[i] = i;
    }

    jobs.sort((a,b) =>profit[a] - profit[b]);

    let idx = jobs.length - 1;
    let result = 0;
    for (let i = worker.length - 1; i >= 0; i--) {
        while (worker[i] < difficulty[jobs[idx]]){
            idx--;
            if(idx < 0) {
                return result;
            }
        }
        result += profit[jobs[idx]];
    }
    return result;
};