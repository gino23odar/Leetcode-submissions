/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a,b) => a[0] - b[0])
    let maxWidth = points[1][0] - points[0][0];
    for(let i = 2; i < points.length; i++){
        let w = points[i][0] - points[i-1][0];
        if(w > maxWidth) maxWidth = w
    }
    return maxWidth
};