class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        count = 0
        seats = sorted(seats)
        students = sorted(students)
        
        for i in range(len(students)):
            count += abs(students[i] - seats[i])
        
        return count