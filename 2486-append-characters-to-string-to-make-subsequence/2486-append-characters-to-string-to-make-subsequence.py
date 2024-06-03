class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        n = len(t)
        s_iter = iter(s)
        for i, x in enumerate(t):
            if x not in s_iter:
                return n - i
        return 0