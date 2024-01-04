class Solution:
    def minOperations(self, nums: List[int]) -> int:
        map = defaultdict(int)
        for num in nums:
            map[num] += 1
        
        min = 0
        for val in map.values():
            if val == 1:
                return -1
            op = math.floor(val/3)
            rem = val % 3
            if rem > 0:
                op += 1
            min += op
        
        return min
        
        