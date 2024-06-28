/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    const inDegrees = Array(n).fill(0)
    
    for (let [x,y] of roads) {
        inDegrees[x]++
        inDegrees[y]++
    }
    
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push([i, inDegrees[i]])
    }
    
    arr.sort((a,b) => b[1] - a[1])
    const values = Array(n).fill(0)
    for (let i = 0; i < arr.length; i++) {
        const [ind, deg] = arr[i]
        values[ind] = arr.length - i
    }
    
    let res = 0
    for (let [x,y] of roads) {
        res += values[x] + values[y]
    }
    
    return res
};