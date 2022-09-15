/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    if (changed.length % 2 === 1) {
    return [];
    }

    var frequency = [], index_frequency = 0, maxLength = Math.pow(10, 5) + 1;
    while (index_frequency < maxLength) {
        frequency[index_frequency++] = 0;
    }


    for (let n of changed) {
        frequency[n]++;
    }

    if (frequency[0] % 2 === 1) {
        return [];
    }

    var original = [], index_original = 0;
    for (let i = 0; i < maxLength; i++) {
        while (2 * i < maxLength && frequency[i] > 0 && frequency[2 * i] > 0) {
            original[index_original++] = i;
            frequency[i]--;
            frequency[2 * i]--;
        }
    }
    return (index_original === changed.length / 2) ? original : [];
};