/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a,b) => a - b);
    students.sort((a,b) => a - b);
    
    //console.log(seats,students)
    let count = 0;
    let i = 0;
    while(i < students.length){
        count += Math.abs(students[i] - seats[i]);
        i++
    }
    return count
};