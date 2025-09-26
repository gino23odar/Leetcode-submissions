function triangleNumber(nums: number[]): number {
    const n = nums.length;
    nums.sort((a, b) => a - b);

    let triplets = 0;
    for (let i = n - 1; i > 1; i--) {
        const third = nums[i];
        let left = 0;
        let right = i - 1;

        while (left < right) {
            const first = nums[left];
            const second = nums[right];

            if (first + second > third) {
                triplets += right - left;
                right--;
            } else {
                left++;
            }
        }
    }

    return triplets;
};