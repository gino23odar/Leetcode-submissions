class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        m = Counter(hand)
        hand.sort()
        for card in hand:
            if m[card] == 0:
                continue
            for i in range(0,groupSize):
                cur = card + i
                if m[cur] == None or m[cur] == 0:
                    return False
                m[cur] -= 1
        return True