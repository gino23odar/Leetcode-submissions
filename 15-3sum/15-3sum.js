/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let solArr = [];

    const sortedArr = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedArr.length - 2; i++) {
        if (sortedArr[i] > 0) {
            break;
        }

        if (i > 0 && sortedArr[i] == sortedArr[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = sortedArr.length - 1;

        while (left < right) {
            const tempSum = sortedArr[left] + sortedArr[right] + sortedArr[i];

            if (tempSum == 0) {
                solArr.push([
                    sortedArr[i],
                    sortedArr[left],
                    sortedArr[right],
                ]);

                do {
                    left++;
                } while (sortedArr[left] == sortedArr[left - 1]);

                do {
                    right--;
                } while (sortedArr[right] == sortedArr[right + 1]);
                
            } else if (tempSum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return solArr;
};