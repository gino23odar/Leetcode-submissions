class Solution:
    def countTriplets(self, arr: List[int]) -> int:
        n: int = len(arr)
        d = defaultdict(list)
        d[0].append(-1)
        k = 0
        ans = 0
        for i in range(n):
            k ^= arr[i]
            for prev in d[k]:
                ans += i - prev - 1
            d[k].append(i)
        return ans