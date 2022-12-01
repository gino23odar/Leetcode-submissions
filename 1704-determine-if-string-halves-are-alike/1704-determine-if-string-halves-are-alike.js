/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = s => {
  let sum = 0;
  const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
  for (let i = 0; i < s.length / 2; i++){
     sum += vowels.has(s[i]) - vowels.has(s[s.length - 1 - i]); 
  }
  return !sum;
};