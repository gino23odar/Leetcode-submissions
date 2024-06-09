class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        dic = {0:1}
        cur_sum = 0
        count = 0
        for i in range(0,len(nums)):
            cur_sum += nums[i]
            rem = ((cur_sum % k) + k)%k
            if rem in dic:
                count += dic[rem]
                dic[rem] += 1
            else:
                dic[rem] = 1
        return count
            