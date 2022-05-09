/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const noteArray = ransomNote.split('');
    const magazineArray = magazine.split('');
    
    const ransomNoteIsThere = noteArray.every((letter) => {
    const indexOfLetter = magazineArray.indexOf(letter);
    if (indexOfLetter > -1) {
      magazineArray.splice(indexOfLetter, 1);
      return true;
    }
  });
  return ransomNoteIsThere;
};