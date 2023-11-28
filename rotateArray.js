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
    if (nums.length === k || nums.length === 0) return 

    k = k % nums.length

    // nums.splice(nums.length - k, k).reverse().forEach(num => nums.unshift(num))


    // NOTE: splice(index, how many idedelete)
    // NOTE: kung splice(index) lang bale deelete niya na yung the rest sa right side
    // IMPORATANT!!!  just look console.logs sa baba
    nums.unshift(...nums.splice(nums.length - k, k))

    
};

let nums = [1,2,3,4,5,6,7], k = 3


// rotate(nums,k)
// console.log(nums)

/*
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

