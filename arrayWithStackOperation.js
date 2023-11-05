/* THIS IS THE FIRST EVER PROBLEM THAT I FUCKING SOLVED BY MY OWN FUCKING SELF HAHAHAHAHAHAHA ACHIEVEMENT!!!!! */
/* LETS GOOOOOOO BOIS!!!! */

/*
Example 1:

Input: target = [1,3], n = 3
Output: ["Push","Push","Pop","Push"]
Explanation: Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Pop the integer on the top of the stack. s = [1].
Read 3 from the stream and push it to the stack. s = [1,3].
Example 2:

Input: target = [1,2,3], n = 3
Output: ["Push","Push","Push"]
Explanation: Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Read 3 from the stream and push it to the stack. s = [1,2,3].
Example 3:

Input: target = [1,2], n = 4
Output: ["Push","Push"]
Explanation: Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Since the stack (from the bottom to the top) is equal to target, we stop the stack operations.
The answers that read integer 3 from the stream are not accepted.
*/

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */

// NOTE: una sa lahat etong function na to yung ginamit ko kasi andito ko maeexplain yung logic
// NOTE: pero kung pahiklian at padalian ng code check mo yung ginawa kong code sa baba
var buildArray = function(target, n) {
    // gumawa muna ako ng output na paglalagyan shempre since eto yung irereturn ko
    let output = []
    // si left ay yung current index sa target or parang pointer
    // si pushValue naman yung ipupush so sakanya madedetermine kung ang ipupush ay push lang or push and pop
    let left = 0, pushValue = 1

    // so nag loop ako habang si pushValue ay < or equal sa last value ng target 
    // bale need ko icheck to kasi paano is ang given ay [1, 2] tas ang n ay 4 
    // so magkakandaleche leche yung loop kaya need ko ng stop statement baka kasi 1 and 2 lang ang target edi pag nag 3 at 4 pa nag pupush pa rin
    while (pushValue <= target[target.length-1]){
        // if si current index or pointer ay equals sa pushvalue edi ipupush ko lang literal
        if (target[left] === pushValue){
            output.push("Push")
            // then shempre need ko iincrement si current index since okay na siya e pati shempre si pushValue since si naunang pushValue ay okay na
            // edi shempre increment naten 
            left++
            pushValue++
        } else {
            output.push("Push")
            output.push("Pop")
            // dito naman paano pag di equal si pushValue sa target[left]
            // edi shempre stay lang tayo sa current index pero si pushvalue dadagdagan parin naten kaya ayon 
            pushValue++
        }
    }

    return output

};

let target = [1,3], n = 3
console.log(buildArray(target, n))




// IMPORTANT/ LESSER LINE OF CODES
// function buildArray(target, n){
//     let output = []

//     for (let i = 0, pushValue = 1; pushValue <= target[target.length - 1]; pushValue++){
//         if (target[i] === pushValue){
//             console.log(`i is ${target[i]} and pushValue is ${pushValue}`)
//             output.push("Push")
//             i++
//             console.log(output)
//         } else {
//             console.log(`i is ${target[i]} and pushValue is ${pushValue}`)
//             output.push("Push", "Pop")
//             console.log(output)
//         }
//     }

//     return output
// }