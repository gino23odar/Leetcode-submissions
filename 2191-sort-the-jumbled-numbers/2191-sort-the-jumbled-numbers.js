/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    const mapped = nums.map((n, idx) => [transform(n, mapping), idx]);

    mapped.sort(([x], [y]) => x - y);

    return mapped.map(([_, idx]) => nums[idx]);
}

function transform(n, mapping) {
    if (n === 0) return mapping[0];
    
    let realValue = 0;
    let carry = 1;

    while (n > 0) {
        const digit = n % 10;
        realValue += mapping[digit] * carry;
        carry *= 10;
        n = (n / 10) >> 0;
    }

    return realValue;
}
