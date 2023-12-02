/*
Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1
Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: []
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // bale need ko muna icheck yung mga edge cases para mas optimal at mataas completion rate sa leetcode shempre
    // if head === sa value na ireremove edi una palang palitan ko na si head hanggat sa ang maging head.val ay hindi equal dun sa val sa parameter
    while(head && head.val === val){
        head = head.next
    }

    // then need ko gumawa ng isa pang class or function ng linkedlist then i assign ko sa next neto si head
    let dummyPrev = new ListNode(0, head)

    // si previous naman bale pointer to kaya naman nilagay ko pa sa variable si dummyPrev so ang purpose ni dummyPrev ay para magkaroon ako ng previous
    let previous = dummyPrev

    // si current ay si head shempre
    let current = head

    // so ichecheck ko lang lagi kung si value ba equal dun sa val na ireremove
    // pag equal edi ituro ko si prev.next sa curr.next
    // then shempre kahit anong mangyare lagi kong imumove si current dun sa next niya para magcheck lang ng magcheck
    while (current){
        current.val === val ? previous.next = current.next : previous = previous.next
        current = current.next
    }


    // since yung previous at current ay pointer lang edi ibabalik ko na ngayon si head
    // which is naka store dun sa .next ni dummyPrev
    return dummyPrev.next
};