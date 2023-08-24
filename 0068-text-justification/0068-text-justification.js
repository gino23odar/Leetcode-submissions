/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const lines = [];
    let line = '';
    
    while (words.length) {
        const word = words.shift();
        
        if (fitsOnLine(word, line)) {
            line += `${word} `;
        } else {
            lines.push(line.trim());
            line = `${word} `;
        }
    }

    if (line.trim()) lines.push(line.trim());

    return lines.map(justify);
    
    function justify(line, i, array) {
        if (i === array.length - 1) {
            return line.padEnd(maxWidth, ' ');
        }

        const parts = line.split(' ');
        
        if (parts.length === 1) {
            return line.padEnd(maxWidth, ' ');
        }
        
        const difference = maxWidth - parts.reduce((t, p) => t + p.length, 0);
        const minSpaces = Math.floor(difference / (parts.length - 1));
        let remainingSpaces = difference - (minSpaces * (parts.length - 1))
        
        for (let i = 0; i < parts.length - 1; i++) {
            parts[i] += ' '.padStart(minSpaces, ' ');
        }
        
        let j = 0;
        
        while (remainingSpaces) {
            parts[j++] += ' ';
            remainingSpaces--;
        }
        
        return parts.join('');
    }
    
    function fitsOnLine(word, l) {
        return (l + word).length <= maxWidth;
    }
};