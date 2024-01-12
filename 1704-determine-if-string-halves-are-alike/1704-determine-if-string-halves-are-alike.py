class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        cnt, vowels = 0, 'a,e,i,o,u,A,E,I,O,U'
        
        for i in range(len(s)//2):
            cnt += s[i] in vowels
            cnt -= s[~i] in vowels
        
        return not cnt