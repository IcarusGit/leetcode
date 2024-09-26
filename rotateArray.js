/*
Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // TO HANDLE BASE CASES LANG ULIT
    if (nums.length === k || nums.length === 0) return 

    // so first take note naten na si k yung input kung ilang beses naten irorotate si array
    // so pano kung ang length ay 7 tapos kapag nirotate kasi naten siya ng 10 times same lang yung itsura ng array or mga pwestuhan sa pag rotate sakanya ng 3 times
    // so ang hassle naman non kung yung irorotate mo ng 10 times same lang din pala sa 3 times 
    // HOW: k = k % length  ----->  3 % 7 = 3   WHILE 10 % 7 = 3
    // so take note nalang din
    // ALMOST ALWAYS OR USUALLY KAPAG NAG MODULE KA IF SI NASA LEFT OR SI 10 AT 3 SA EXAMPLE SA TAAS AY NASA LEFT
    // kung mas mababa si nasa left bale siya rin answer
    k = k % nums.length

    // nums.splice(nums.length - k, k).reverse().forEach(num => nums.unshift(num))


    // NOTE: splice(index, how many idedelete)
    // NOTE: kung splice(index) lang bale deelete niya na yung the rest sa right side
    // IMPORATANT!!!  just look console.logs sa baba
    nums.unshift(...nums.splice(nums.length - k, k)) // or just nums.unshift(...nums.splice(nums.length - k))

    return nums
};

let nums = [1,2,3,4,5,6,7], k = 3


console.log(rotate(nums,k))
// console.log(nums)

/*
NOTE: BALE KASI PAG NAG SPLICE KA AY MATATANGGAL YUNG MGA PARIGHT NUNG INDEX NA YUN RIGHT
SO DITO AY SINCE 7-3 = 4 BALE LAHAT NG NASA RIGHT MULA INDEX 4 AY TANGGAL
SO KUNG IAASSIGN MO SA VARIABLE YUNG SPLICE BALE YUN YUNG REASON KAYA 5 6 7
console.log(nums.splice(nums.length-k)) // [ 5, 6, 7 ]
let container = nums.splice(nums.length-k)
console.log(container) // [ 5, 6, 7 ]
console.log(...container) // 5 6 7
*/

/*
nums.unshift(container)
console.log(nums) // [ [ 5, 6, 7 ], 1, 2, 3, 4 ]
*/

/*
console.log(nums.unshift(container)) // 5
*/

/*
let container = nums.splice(nums.length - k)
nums.unshift(...container)
console.log(nums) // [ 5, 6, 7, 1, 2, 3, 4 ]
*/

