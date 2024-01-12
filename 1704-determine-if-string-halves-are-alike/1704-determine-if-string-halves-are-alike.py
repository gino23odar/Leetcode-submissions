class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        mid = len(s) // 2
        a = s[:mid]
        b = s[mid:]
        
        regex = re.compile(r'[aeiouAEIOU]', re.IGNORECASE)
        
        a_count = sum(1 for char in a if regex.match(char))
        b_count = sum(1 for char in b if regex.match(char))
        
        return a_count == b_count