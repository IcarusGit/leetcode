/*
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // una if si head ay null bale return ko na agad si null pwede ring return head
    if ( !head ) return null

    // bale dineclare ko muna si tail kase hahanapin ko yung tail para malaman ko yung size ng linkedlist na given
    let tail = head

    // shempre sa una palang ang tail = head which means ang count naten ay 1 na agad
    let size = 1

    // ngayon habang hindi null yung tail.next edi mag mumove lang ng mag mumove then shempre kada move nalalaman naten na lumalaki yung size 
    while(tail.next){
        tail = tail.next
        size++
    }

    if (size === k) return head

    // after nung loop edi nasa last node na tayo and yung next niya ay null so ngayon itinutok ko si next kay head so para siyang infinite loop ngayon diba
    tail.next = head

    // bale eto nasearch ko lang so yung count kase siya yung parang index ng head siya yung magiging head. gets ba?
    // IMPORTANT: so bakit may module pa? kasi example is ang length ay 10 bale ang unang formula ay length - k
    // IMPORTANT: what if si K ay more than the length so dun papasok si modulo 
    // bale kasi example 2 % 10 ===> IMPORTANT: kung si left side ay smaller kesa sa right side, kapag modulo operator ang answer lagi ay si left side or si k
    // so 2 % 10 === 2
    let count = size - (k % size)
    // NOTE: bakit nga ba need i modulo? kasi example ha, ang length ay 5 tapos si k ay 8 edi 8 times ba natin siyang babaliktaren?
    // diba if ang k ay equal sa length edi wala lang same parin yung head pero kung 8 na yan since may excess na 3 so 3 times nalang nating irorotate hindi 8
    // ngayon yun yung ginagawa ni modulo if length = 5 and k = 8 for example edi (length - (k % length)) || 5 - (3)


    // so now mag luloop tayo
    // bale nag loop lang ako hanggat mahanap ko yung index nung sa count kase nga dun ko isasalpak yung head, so paano?
    // [1,2,3,4,5] eto example k = 2 so length - 2 diba... so ngayon isasalpak ko daw si head sa index 3 which is si 4 ang val kung bibilangin mo
    // NGAYON: diba kung nasa index 3 yan dapat 4 iterations since mag sstart sa 0... oo pero kase sa loob ng loop eh puro mga naka head.next at tail.next yan
    // so una palang ay nakaturo na yan sa index 1 so kapag nasa 3rd iteration na nakaturo na si head sa 3rd index which is yung pam-four dahil nga nagstart sa 0
    for (let i = 0; i < count; i++){
        head = head.next
        tail = tail.next
    }
    // NOTE: kaya naman yung for loop sa taas ay same lang dito sa while loop since ayun nga nag babawas ako ng count 

    // while(count > 0){
    //     head = head.next
    //     tail = tail.next

    //     count--
    // }



    // so shempre dito kung si tail ang pointer mo edi dapat ang tail.next mo ay null dahil nga linked list ka
    tail.next = null

    return head
};