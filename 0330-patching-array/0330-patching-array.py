class Solution:
    def minPatches(self, nums: List[int], n: int) -> int:
        pat = 0
        obt = 0
        i = 0
        
        while obt < n:
            if i < len(nums) and nums[i] <= obt + 1:
                obt += nums[i]
                i += 1
            else:
                pat += 1
                obt += obt + 1
        return pat