class Solution:
    def minIncrementForUnique(self, nums: List[int]) -> int:
        moves = 0
        nums.sort()
        
        for i in range(len(nums)-1):
            if nums[i+1] <= nums[i]:
                moves += nums[i] - nums[i+1] + 1
            nums[i+1] = max(nums[i+1], nums[i]+1)
        return moves