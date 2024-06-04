class Solution:
    def longestPalindrome(self, s: str) -> int:
        dic = Counter(s)
        longest = 0
        for key, val in dic.items():
            if (val % 2) == 0:
                longest += val
            elif val > 1:
                longest += val - 1
        if longest < len(s):
            return longest + 1
        else:
            return longest