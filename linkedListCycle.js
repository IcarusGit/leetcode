/*
Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // bale si slow yung one step lang lagi tinatalon
    // si fast naman yung dalawa bale .next.next
    let slow = head, fast = head;

    // since nakacycle yung given ichecheck ko lang lagi kung may next at current kasi kapag may nag null dyan sa dalawang yan edi walang cycle
    while (fast && fast.next){
        // bale may slow and fast pointer ako then kapag nakita ko na same sila or nagmeet sila edi may cycle since imbis na nakaturo sa null
        // ang last value ay tumuturo sa isa pang index so cycle which means forever umiikot
        slow = slow.next
        fast = fast.next.next

        // need na nasa baba to like here sa line na to i mean i-usog ko muna si slow at fast di pwedeng icheck ko agad tong condition na to
        // kase sa una si slow and fast ay equal so una palang laging return true na yan
        if (slow === fast) return true
    }

    return false
};