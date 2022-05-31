/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort(([a,b], [c,d]) => a - c);
    let ans = [];
    for(let interval of intervals){
        if(ans.length === 0 || interval[0] > ans[ans.length-1][1]){
            ans.push(interval.concat());
        } else {
            ans[ans.length - 1][1] = Math.max(interval[1], ans[ans.length - 1][1]);
        }
    }
    return ans;
};