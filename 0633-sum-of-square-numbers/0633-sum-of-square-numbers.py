class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        i = 0
        j = ceil(sqrt(c))
        
        while i <= j:
            sum = i*i + j*j
            if sum < c:
                i += 1
            elif sum > c:
                j -= 1
            else:
                return True
        return False