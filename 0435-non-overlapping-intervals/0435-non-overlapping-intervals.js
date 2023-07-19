/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let prevEnd = intervals[0][1];
    let res = 0;

    for (let int of intervals.slice(1)) {
        if (int[0] >= prevEnd) {
            prevEnd = int[1]
        } else {
            res++;
            prevEnd = Math.min(prevEnd, int[1])
        }
    }

    return res;
};