/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  var len = rating.length;
  var sum = 0;
  for (let i = 1; i < len - 1; i++) {
    var l = [0, 0];
    var r = [0, 0];
    for (let j = 0; j < len; j++) {
      if (rating[j] < rating[i]) {
        j < i ? l[0]++ : r[0]++;
      }

      if (rating[j] > rating[i]) {
        j < i ? l[1]++ : r[1]++;
      }
    }

    sum += l[0] * r[1] + l[1] * r[0];
  }
  return sum;
};