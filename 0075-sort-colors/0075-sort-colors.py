class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        d = [0,0,0]
        for num in nums:
            d[num] += 1
        idx = 0
        for num, c in enumerate(d):
            for _ in range(c):
                nums[idx] = num
                idx += 1
        
            