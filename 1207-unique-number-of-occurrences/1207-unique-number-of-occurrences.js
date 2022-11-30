/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = arr.reduce((a,c) => {
        a[c] = a[c] + 1 || 1
        return a
    },{})

    let values = Object.values(obj)
    return values.length  == new Set(values).size
};