class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        heap1 = [(c, -p) for c, p in zip(capital, profits)]
        heap2 = []
        heapify(heap1)
        for _ in range(k):
            while heap1 and heap1[0][0] <= w:
                heappush(heap2, heappop(heap1)[1])
            w += -heappop(heap2) if heap2 else 0
        return w