/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const dist = points.map(point => {
        let [x, y] = point;
        return [point, x * x + y * y];
    })

    dist.sort((a, b) => a[1] - b[1]);
    return dist.slice(0, k).map(a => a[0]);
};