function doesAliceWin(s: string): boolean {
    let vowels = s.match(/[aeiou]/gi);
    return vowels !== null && vowels.length > 0;
};