function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {
    const friendshipsWithProblem = []
    for (const [f1, f2] of friendships) {
        const f1Lang = languages[f1-1]
        const f2Lang = languages[f2-1]
        if (!hasCommonLang(f1Lang, f2Lang)) {
            friendshipsWithProblem.push([f1, f2])
        }
    }

    const lang = languages.map(language => new Set(language))

    let min = Infinity
    for (let i=1; i<=n; i+=1) {
        min = Math.min(min, teachLang(i, lang, friendshipsWithProblem))
    }
    return min
};

function hasCommonLang(lang1: number[], lang2: number[]) {
    const set = new Set(lang1)
	return lang2.some(lang => set.has(lang))
}

function teachLang(language: number, lang: Set<number>[], friendships: number[][]) {
    let n = 0
    for (const [f1, f2] of friendships) {
        if (!lang[f1-1].has(language)) {
            lang[f1-1].add(language)
            n += 1
        }
        if (!lang[f2-1].has(language)) {
            lang[f2-1].add(language)
            n += 1
        }
    }
    return n
}