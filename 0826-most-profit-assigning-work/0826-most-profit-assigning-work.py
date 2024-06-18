class Solution:
    def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
        worker.sort()
        jobs = [0] * len(profit)
        
        for i in range(len(profit)):
            jobs[i] = i
        
        jobs = sorted(jobs, key=lambda x: profit[x])
        print(jobs)
        
        idx = len(jobs) - 1
        res = 0
        for i in range(len(worker)-1,-1,-1):
            while worker[i] < difficulty[jobs[idx]]:
                idx -= 1
                if idx < 0:
                    return res
            res += profit[jobs[idx]]
        return res