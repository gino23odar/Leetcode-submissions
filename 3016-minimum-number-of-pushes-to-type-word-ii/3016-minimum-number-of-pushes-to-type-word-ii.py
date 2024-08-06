class Solution:
    def minimumPushes(self, word: str) -> int:
        freq = [0] * 26
        
        for letter in word:
            freq[ord(letter) - 97] += 1
        
        freq.sort(reverse=True)
        
        ans = 0
        for i in range(len(freq)):
            if freq[i] == 0: 
                break
            check = (i // 8) + 1
            ans += freq[i] * check
        return ans