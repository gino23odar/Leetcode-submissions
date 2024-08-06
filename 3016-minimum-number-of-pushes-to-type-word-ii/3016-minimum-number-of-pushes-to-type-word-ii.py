class Solution:
    def minimumPushes(self, word: str) -> int:
        freq = list(Counter(word).values())
        
        freq.sort(reverse=True)
        
        return sum([num *(i//8 + 1) for i,num in enumerate(freq) ])