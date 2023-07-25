/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = arr => arr.indexOf(Math.max.apply(null, arr))