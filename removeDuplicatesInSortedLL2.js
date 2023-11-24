/*
Example 1:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:
Input: head = [1,1,1,2,3]
Output: [2,3]
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
var deleteDuplicates = function(head) {
    // bale una check muna mga basic conditions para mag end na agad di na tumakabo takbo pa
    if(!head || !head.next) return head

    // bale need ko gumawa ng new Node since mag mamanipulate ako ng kung ano ano kay head so di ko pwedeng kunin si head lang agad
    let newNode = new ListNode(0, head)

    // since and next ni newNode ay si head ginawa kong current si head w/c is si newNode.next
    let current = newNode.next

    // si previous naman bale need ko kasing malaman yung previous node dahil if si current at current.next ay same so duplicate sila so ireremove ko
    // so if ireremove ko sila shempre need ko mag keep track kay previous so eto si previous yung new node na ginawa ko
    let previous = newNode
    
    // etong duplicate naman eh para kapag si current at current.next ay same edi store ko sa duplicate yung value nila 
    // bale if may for example 5 na same values dito ko tatawagin si duplicate para ma check
    let duplicate 

    // importante na icheck ko yung current.next dito di lang pwedeng si current lang kasi if null si current.next tatakbo siya then mag kakaerror
    while(current && current.next){
        // NOTE/IMPORTANT!!!!! bale need na eto yung nsa if statement since kapag binaliktad magloloko dahil pwedeng may ibang cases pa
        // so check ko muna shempre if equal si curr at curr.next
        if (current.val === current.next.val){
            // kung equal sila shempre yung duplicate value ay yung .val nila so inistore ko na kay duplicate
            duplicate = current.val
            // si current ngayon ay yung .next.next since si current.next nga ay same sa current diba so dalhin ko na agad si current dun sa current.next.next
            current = current.next.next

            // so pano kung yung current ay same parin sa duplicate edi mag current.next lang ulit tayo hanggat mag iba na yung current.val
            // IMPORTANT: but dont forget the current !== null na operation kasi mag eerror
            // kasi what if nasa end na tayo ng linked list and yung current ay === null edi irurun pa natin yung pang null eh no need na yon
            while (current && current.val === duplicate){                
                current = current.next
            }

            // so shempre dahil nga may duplicate edi si previous ipopoint naten dun sa node na walang duplicate which is yung yung ginagawa ni current
            // dinadala ko si current dun sa mga walang duplicate para maturo si previous don
            previous.next = current
            
        }
        else {
            // if wala namang duplicate or kapag naremove na duplicate after ituro ni si previous.next sa taas
            // so si current ngayon ay === nas a current.next shempre move lang ng move if wala namang duplicate
            current = current.next
            
            // then this time pwede na nating palitan si previous para if may duplicate man ulit edi yung next previous na yung mag popoint dun sa next node na unique
            previous = previous.next
        }
    }

    // IMPORTANT!!! bale kasi si previous na variable at ginamit ko para ipoint ng ipoint yung mga nakanewNode dun sa mga other nodes na unique
    // kapag ang nireturn ko ay si previous.next edi ibabalik lang niya yung last value na unique
    // so what i did is that nireturn ko ngayon yung newNode.next since ang next niya ay si head na minodify modify ko yung mga next via kay previous
    return newNode.next    
};