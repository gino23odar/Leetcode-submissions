/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    const graph = new Array(n).fill().map(()=>new Set());
    for(let i=0; i<n; i++) {
        const managerId = manager[i];
        if(managerId != -1) {
            graph[managerId].add(i);
        }
    }
    const que = [[headID, 0]];
    let ans = 0;
    while(que.length) {
        const [node, time] = que.shift();
        ans = Math.max(ans, time);
        for(const nei of graph[node]) {
            que.push([nei, informTime[node] + time]);
        }
    }
    return ans;
};