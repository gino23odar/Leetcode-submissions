class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        ans = []
        for w in words:
            ans.append(Counter(w))
        a = ans[0]
        for item in ans:
            a = a & item
            #print(a)
		# a include of common characters and frequency of them
        result = []
		# represent "a" in view as requested:
        for key , value in a.items():
            for i in range(value):
                result.append(key)
        return result
            