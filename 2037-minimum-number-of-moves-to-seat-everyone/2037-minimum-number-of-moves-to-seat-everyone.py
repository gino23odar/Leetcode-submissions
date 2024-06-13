class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        count = 0
        seats.sort()
        students.sort()
        
        for i in range(len(students)):
            count += abs(students[i] - seats[i])
        
        return count