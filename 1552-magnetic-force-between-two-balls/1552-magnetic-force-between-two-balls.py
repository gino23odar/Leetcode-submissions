class Solution:
    def maxDistance(self, position: List[int], m: int) -> int:
        position.sort()
        
        def distribute(n):
            count = 1
            dist = 0
            for i in range(1,len(position)):
                dist += position[i] - position[i-1]
                if dist >= n:
                    count += 1
                    dist = 0
            return count >= m
        
        left = 1
        right = position[len(position)-1] - position[0]
        ans = 0
        
        while left <= right:
            mid = (left+right) // 2
            if distribute(mid):
                ans = mid
                left = mid + 1
            else:
                right = mid - 1;
        
        return ans
    