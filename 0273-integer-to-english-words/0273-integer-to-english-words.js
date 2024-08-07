/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  const map19 = [null, 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven',
    'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const mapTens = [null, null, 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const mapExpo = {
    '10e8': 'Billion',
    '10e5': 'Million',
    '10e2': 'Thousand',
    '10e1': 'Hundred',
  };
  
  function word(n) {
    if (n === 0) return [];
    if (n <= 19) return [map19[n]];
    if (n <= 99) return [mapTens[Math.trunc(n / 10)], ...word(n % 10)];
    for (const div of Object.keys(mapExpo)) {
      if (Math.trunc(n / div) > 0) {
        return [...word(Math.trunc(n / div)), mapExpo[div], ...word(n % div)];
      }
    }
  }
  
  return word(num).join(' ') || 'Zero';
};