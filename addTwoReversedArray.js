/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [0], l2 = [0]
Output: [0]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // first note lang na kapag nag l1.reverse ka kasi kumbaga parang nirereverse mo narin yung original array
    // so if want mo na maging unchange yung original array.. so gagawa ka ng new array
    // para magkaroon ka nung new array(para lang to di magalaw yung original kase pag ni reverse mo agad kahit nasa variable eh nareverse na yon)
    // so para mareverse at magkaroon ng new array pwede gumamit ng ===> l1.slice().reverse() or 
    // gumamit ng spread operator na iaasign dun sa variable like this => let newL1 = [...l1].reverse()
    // so eto ayaw kong mareverse yung mga original na array kaya gumamit ako nung slice at spread operator
    let newL1 = [...l1].reverse().join("") // nireverse lang yung array ng [...l1].reverse() => para gawing integer need kong mag .join("") but magiging string
    let newL2 = l2.slice().reverse().join("")
    console.log(`${newL1} and ${newL2}`)
    console.log(`${typeof(newL1)} and ${typeof(newL2)}`)

    //gawing integer shempre yung string
    let sum = +newL1 + +newL2

    // yung sagot bale gagawing string then issplit para maging array then i mamap ko ngayon yung array
    // bale yung map(Number) need na capital N ha then yun nga i paparseInt niya kada index
    let output = sum.toString().split("").map(Number)
    //nireturn ko lang yung array na naka reverse na
    return output.reverse()
    
};

let l1 = [2,4,3]
let l2 = [5,6,4]

addTwoNumbers(l1, l2)