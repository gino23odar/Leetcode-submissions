class Solution:
    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        if m*k > len(bloomDay):
            return -1
        left = min(bloomDay)
        right = max(bloomDay)
        ans = right
        
        while left <= right:
            count = 0
            number = 0
            mid = (left+right)// 2
            for i in range(len(bloomDay)):
                if bloomDay[i] <= mid:
                    count += 1
                    if count == k:
                        number += 1
                        count = 0
                if bloomDay[i] > mid:
                    count = 0
            if number < m:
                left = mid+1
            if number >= m:
                right = mid - 1
                ans = mid
        return ans