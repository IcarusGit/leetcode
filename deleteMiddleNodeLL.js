/*
Example 1:
Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 

Example 2:
Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.

Example 3:
Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let previous = null;
    let slow = head;
    let fast = head;

    // bale imagine-in mo nalang yung tatlong variable ko sa taas then si slow eh 1 node at a time lang nag mumove 
    // si previous naman obviously lagi siyang si before na node ni current slow so sa una shempre null muna siya
    // si fast naman 2 node a a time so .next.next
    while(fast && fast.next){
        // so sa loop na to mag eexecute lang siya if atleast 2 nodes ang given 
        // then ayun na nga pinalitan ko na mga value nila base sa explanation ko sa taas
        previous = slow
        slow = slow.next
        fast = fast.next.next
    }

    // so now ichecheck ko kung null si previous o hindi...
    // kapag not null si prev ibig sabihin yung middle node ay wala sa head or hindi siya si head
    // NOTE: si slow ang middle node... bale nakuha siya sa pag luloop sa taas kanina
    if (previous){
        // so if nahanap na si slow dahil siya ang middle
        // edi papalitan ko nalang kung saan nakapoint si previous so dapat dun siya nakapoint kay previous.next
        previous.next = slow.next
    } else {
        // eto naman bale if si previous ay null it means na isang node lang given so ang mangyayare lagay ko lang si head sa next so si head ay null
        head = slow.next
    }

    return head
};