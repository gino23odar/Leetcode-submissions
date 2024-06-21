class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        issue = []
        freebies = 0
        for i in range(len(grumpy)):
            if grumpy[i] == 1:
                issue.append(customers[i])
            else:
                issue.append(0)
                freebies += customers[i]

        m = 0
        
        for i in range(0,minutes):
            m += issue[i]
            
        newMax = m
        
        for i in range(0, len(issue)-minutes):
            newMax = newMax - issue[i] + issue[i+minutes]
            if newMax > m:
                m = newMax
        return m + freebies