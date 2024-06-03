class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        sInd, tInd = 0, 0
        while sInd < len(s) and tInd < len(t):
            if s[sInd] == t[tInd]:
                tInd += 1
            sInd += 1
        return len(t) - tInd