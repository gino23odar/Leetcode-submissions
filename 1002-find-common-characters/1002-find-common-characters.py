class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        base = Counter(words[0])
        for word in range(1,len(words)):
            base &= Counter(words[word])
        return base.elements()
            