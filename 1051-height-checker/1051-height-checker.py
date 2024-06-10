class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        exp = heights.copy()
        exp.sort()
        cur_sum = 0
        for i in range(len(heights)):
            if exp[i] != heights[i]:
                cur_sum += 1
        return cur_sum