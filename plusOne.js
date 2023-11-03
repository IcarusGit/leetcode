/*
Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */

// PUTANGINA SIR MINSAN LANG AKO DI MAG SEARCH MAY TEST CASE ERROR PA HAHAHAHA SO MAG REFER KA NALANG SA OTHER CODE SA BABA
// var plusOne = function(digits) {
//     let output = []
//     let result = 0
//     let raise = digits.length - 1

//     for (let i = 0; i < digits.length; i++){
//         result += digits[i]*(10**raise--)
//         console.log(result)
//     }
//     ++result

//     let lastnum 
//     while(result > 0){
//         lastnum = result % 10
//         output.unshift(lastnum)
//         result = Math.floor(result / 10)
//     }

//     return output
// };

var plusOne = function(digits) {
    /*
    let holder = BigInt(digits.join("")) + 1n
    console.log(holder) // ang output neto ay yung mismong numbers pero since BigInt siya meron siyang (n) sa dulo like this == 6145390195186705544n

    console.log(holder.toString()) // i ooutput niya yung mismong numbers lang mawawala yung n
    */

    // una ginawa ko munang string yung lahat ng digits tas pinagjoin ko sila para iisang string nalang bale digits.join("") yun
    // then yung string na yun imbis na parseInt ginawa kong BigInt... why? check mo yung comment ko sa babang baba
    // then nag add ako ng 1n bale yung n kasi para sa mga BigInt yan
    // then yung bigint cinonvert ko into string para masplit ko siya
    // actually after nung split("") accepted na siya sa leetcode
    // pero cinonvert ko pa per index into Number kaya ko minap since wala lang OC lang ako
    return (BigInt(digits.join("")) + 1n).toString().split("").map(Number)
    
};

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(digits))



// IMPORTANT: sa parseInt(<name ng string na ipaparse>, 10) ==> 10 == DECIMAL --- bale kapag naman 2 nilagay naten icoconvert naten into BINARY
// JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
// *JavaScript integers are only accurate up to 15 digits:*

// console.log(digits.join("")) // 4001
// console.log(typeof(digits.join(""))) // string
// console.log(digits.join("")) // 4,0,0,1
// console.log(typeof(BigInt(digits.join("")))) // bigint