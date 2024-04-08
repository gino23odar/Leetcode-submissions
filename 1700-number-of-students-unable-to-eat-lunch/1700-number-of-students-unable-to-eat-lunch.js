/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let round = 0;
    while (true) {
        if (students.length == 0 || round == students.length) break;
        if (students[0] != sandwiches[0]) {
            students.push(students.shift());
            round++;
        } else {
            students.shift();
            sandwiches.shift();
            round = 0;
        }
    }
    return students.length;
};