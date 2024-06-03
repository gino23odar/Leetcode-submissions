class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        l = len(s)//2
        for i in range(0,l):
            temp = s[i]
            s[i] = s[len(s)-1-i]
            s[len(s)-1-i] = temp