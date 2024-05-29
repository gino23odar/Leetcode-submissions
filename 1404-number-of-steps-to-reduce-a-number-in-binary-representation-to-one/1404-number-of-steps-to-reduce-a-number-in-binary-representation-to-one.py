class Solution:
    def numSteps(self, s: str) -> int:
        steps = 0
        carry = 0
        for i in range(len(s)-1, 0, -1):
            if s[i] == '0':
                if carry:
                    steps += 2
                else:
                    steps += 1
            else:
                if carry:
                    steps += 1
                else:
                    steps += 2
                    carry = 1
        return steps + carry