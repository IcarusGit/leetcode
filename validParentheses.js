/*
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    let container = []
    for (let letter of s){
        if (letter === "(" || letter === "[" || letter==="{"){
            container.push(letter)
        } else {
            // so nagpush na ko ng mga open brackets paano kung walang open bracket pano kung ang first index ay close na agad
            // so di ako nakapag push non sa container which means 0 ang length ng container array so return false ko na agad yon
            if (container.length === 0) return false

            // nag remove akong nung element na nasa dulo so ang laman neto ngayon ay yung element na niremove ko
            let checker = container.pop()

            // dito naman irereturn false ko lang kapag yung current letter ay hindi magkaparehas dun sa pinop ko
            // shempre dapat kung ang huling nilagay ko sa array ay ( dapat ang ipopop ko rin or yung laman ng checker ay (
            // so kung hindi sila same irereturn kong false kasi what if ang given ay [(])
            // mag tutrue yan kasi nag sara naman both e
            if ((letter === ")" && checker !== "("
              || letter === "]" && checker !== "[" 
              || letter === "}" && checker !== "{")) return false

        }
    }
    // shempre condition ang irereturn ko either true or false so dapat si container ay may length na 0 par mag true
    return container.length === 0
};


let s = "[]()[{()}]" // or "[(])"
console.log(isValid(s))


// MY OWN CODE NA HARD CODED TALAGA TAPOS MAS MABILIS RUNTIME NIYA COMPARED DUN SA FUNCTION SA TAAS NA SAME LANG NAMAN NG GINAGAWA
function checkIfValid (str){
    const parentheses = {"(" : ")", "[" : "]", "{" : "}"}
    let container = []
    for (let letter of str){
        if (letter === "(" || letter === "[" || letter==="{"){
            // pinush ko lang yung mga close brackets
            container.push(parentheses[letter])
        } else {
            // same lang sa taas kung sa first index palang eh wala na laman yung container it means close bracket agad ang 1st index so false na agad
            if (container.length === 0) return false  
            // kinuha ko lang din ulit yung huling element na pinasok ko          
            let checker = container.pop()
            // so shempre kapag yung current letter na close bracket ay hindi equal dun sa pinop ko edi false ka na din dudong
            if (letter !== checker) return false
        }
    }
    return container.length === 0
}

let outputPrinter = checkIfValid(s)
console.log(outputPrinter)


// console.log(arr.pop()) // remove the LAST element and then returns the element that was removed
// console.log(arr.push("baste")) // pushes an element at last index and returns the length after pushing
// console.log(arr.shift()) // removes the FIRST element in the array and returns the element you removed
// console.log(arr.unshift()) // add an element in the beginning or the first index and returns the length after