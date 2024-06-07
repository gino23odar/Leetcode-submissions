class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        words = sentence.split()
        for i in range(len(words)):
            for root in dictionary:
                if not words[i].startswith(root):
                    continue
                words[i] = root
        return " ".join(words)