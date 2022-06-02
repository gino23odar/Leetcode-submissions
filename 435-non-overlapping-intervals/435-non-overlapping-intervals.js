/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let count = 0, j = 0;
    
    for(let i = 1; i < intervals.length; i++){
        let startIndex = intervals[i][0];
        let endIndex = intervals[i][1];
        let currentEndIn = intervals[j][1];
        
        if(currentEndIn > startIndex){
            count++;
            if(endIndex < currentEndIn){
                j = i;
            }
        } else {
            j = i;
        }
    }
    return count;
};