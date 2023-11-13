/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = s.split('').filter(ch => 'aeiouAEIOU'.includes(ch));
    vowels.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
    return [...s].reduce((ans, ch) => ans + ('aeiouAEIOU'.includes(ch) ? vowels.pop() : ch), '');
};