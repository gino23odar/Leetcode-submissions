/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    
    let cur = [intervals[0]]
    for(let i = 1; i < intervals.length; i++){
        let interval = intervals[i];
        let last = cur.at(-1)
        
        if (last[1] >= interval[0]) {
          cur[cur.length - 1] = [
            Math.min(last[0], interval[0]),
            Math.max(last[1], interval[1])
          ]
        } else {
          cur.push(interval)
        }
    }
    return cur
};