/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const copy = [...points];
    copy.sort((a, b) => {
        return (a[0]**2 + a[1]**2) - (b[0]**2 + b[1]**2);
    });
    return copy.slice(0,k);
};

