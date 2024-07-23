class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        freq = Counter(nums)
        sorted_freq = sorted(freq.items(), key=lambda x: (x[1], -x[0]))
        res = []
        for key, val in sorted_freq:
            res.extend([key] * val)
        return res