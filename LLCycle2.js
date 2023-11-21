/*
Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2:
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3:
Input: head = [1], pos = -1
Output: no cycle
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) return null
    if (!head.next) return null

    // ETONG MGA STEP NA ITO AY PARANG SA FIRST LL CYCLE LANG SINCE IF MAY CYCLE EDI PROCEED TAYO IF WALA RETURN NULL LANG
    let slow = head
    let fast = head

    while (fast && fast.next){
        slow = slow.next
        fast = fast.next.next

        if (slow === fast ) break;
    }
    // bale mapuputol kasi yung while loop kapag walang loop pero before mag popoint muna yung slow at fast sa ibang node
    // so shempre if di sila equal return null ko
    if (slow !== fast) return null
    
    // bale now tinuro ko si slow sa head then mag luloop ako
    slow = head
    
    // sa loop na ito mag nenext lang ako ng mag nenext then kapag nag tagpo nanaman ulit si slow at fast it means na yung node na yon ang position na nagkacycle
    // so pwede kong ireturn either si slow or fast
    while (slow !== fast){
        slow = slow.next
        fast = fast.next
    }

    return slow    
};


// bale dito pwede may alternative way which is eto:
// bale rekta na agad to dun sa while loop para dirediretso na
/*
var detectCycle = function(head) {
    if (!head) return null
    if (!head.next) return null

    let slow = head
    let fast = head

    while (fast && fast.next){
        slow = slow.next
        fast = fast.next.next

        if (slow === fast ){
            slow = head
            while (slow !== fast){
                slow = slow.next
                fast = fast.next
            }
            return slow // or fast either works
        }
    }
    return null
};
*/
