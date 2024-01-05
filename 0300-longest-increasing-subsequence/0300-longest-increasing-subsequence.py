class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        seq = []
        for num in nums:
            i = bisect_left(seq, num)
            if i == len(seq):
                seq.append(num)
            else:
                seq[i] = num
        return len(seq)
                