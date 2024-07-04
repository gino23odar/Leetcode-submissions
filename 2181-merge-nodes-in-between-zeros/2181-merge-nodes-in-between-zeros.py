# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        ans = newHead = ListNode()
        curr = head.next
        tot = 0
        
        while(curr):
            if curr.val is not 0:
                tot = tot + curr.val
            else:
                newHead.next = ListNode(tot)
                tot = 0
                newHead = newHead.next
            curr = curr.next
        return ans.next