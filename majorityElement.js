/*
Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // let count = {}

    // for (let i in nums){
    //     if (nums[i] in count){
    //         count[nums[i]]++
    //     } else{
    //         count[nums[i]] = 1
    //     }
    // }

    // // {'3': 2, '2': 1}
    // let getter = Object.keys(count) //[3, 2]
    // getter.sort((a, b) => count[b] - count[a])// to be descending
    // // let getter = Math.max(...Object.values(count))

    // return getter[0]

    // ================================
    
    // dineclare ko lang muna yung pinaka majority na number 
    let majority = 0
    // then eto yung count kung ilang beses nag appear yung majority number na yon
    let count = 0

    for (let currentNumber of nums){
        // so habang niluloop ko ay ichecheck ko kung yung count ay 0
        // shempre kung 0 yon edi wala pang majority so kung sino man ang current number ay siya rin si majority
        if (count === 0){
            majority = currentNumber
        }

        // then ichecheck ko shempre kung si majority ay si currentnumber aba shempre lagyan ko siya ng count++
        // pero kung currentNumber naten ay NOT EQUAL sa majority edi yung count ni majority mababawasan shempre
        currentNumber === majority ? count++ : count--
    }
    return majority
};

let nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))