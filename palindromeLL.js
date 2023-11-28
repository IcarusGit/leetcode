/*
Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let current = head
    let container = []

    // bale nilagay ko lang sa container yung mga value para icompare later
    while (current){
        container.push(current.val)
        current = current.next
    }

    // so nag loop ako ngayon sa mismong head bale kukunin ko kada value non
    while(head){
        // so kada value ni head mag popop ako kay container since pop ay sa last index so kung hindi yun same edi hindi palindrome
        if (head.val !== container.pop()) return false
        head = head.next
    }

    return true
};