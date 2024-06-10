class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        exp = sorted(heights)
        c = sum(h != e for h, e in zip(heights,exp))
        return c