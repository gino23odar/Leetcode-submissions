/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let sec = 0;
    for(let i = 0; i < points.length -1; i++){
        let { 0: curX, 1: curY } = points[i];
        let { 0: nextX, 1: nextY } = points[i + 1];

        sec += Math.max(Math.abs(nextX - curX), Math.abs(nextY - curY))
    }
    return sec
};