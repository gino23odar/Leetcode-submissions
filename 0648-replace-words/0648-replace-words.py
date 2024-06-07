class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        d = {w: len(w) for w in dictionary}
        mi, ma = min(d.values()), max(d.values())
        wrds = sentence.split()
        res = []
        for w in wrds:
            c = w
            for i in range(mi, min(ma, len(w)) + 1):
                ss = w[:i]
                if ss in d:
                    c = ss
                    break
            res.append(c)
        return " ".join(res)