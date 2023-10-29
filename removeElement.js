/*
Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {    
    /*
    while(nums.includes(val)){
        nums.splice(nums.indexOf(val), 1)
    }

    return nums.length
    */



    
    // the first or leftmost index ng array naten
    let left = 0
    // the last or rightmost index ng array naten
    let right = nums.length - 1

    // mag checheck lang ako ng magchecheck habang yung index number ng nasa left side ay mas maliit or if equal dun sa right number
    while(left <= right){
        // if yung left index ay equal dun sa chinecheck nating value na ireremove papalitan natin ngayon ng value yung index na yon
        if (nums[left] === val){            
            // bale kung si nums[left] ay equal sa val which is sa given naten ay val = 2
            // papalitan naten si nums[left] ngayon ay gagawin natin siyang same sa value ni pinaka right
            nums[left] = nums[right]
            // so what if yung value nung nasa right na pinalit naten ay same sa val = 2 edi dapat maremove din yon or di rin masama sa bilang diba
            // ngayon uusog tayo ng 1 place to the left /// bale from last index uusog tayo ng lastindex - 1 pa ulit... bale minus 1 lang ulit para mausog
            // then mag luloop ulit diba so kung si nums[left] ay hindi na equal kay val = 2 edi mag proceed na tayo sa else statement
            right--
        } else {
            // so shempre kung si current index ay hindi naman equal sa val = 2 edi we are good na usog na tayo ng index so left + 1 na 
            left++
        }
    }
    console.log(nums)
    console.log(left)
    return left
     
};

let nums = [0,1,2,2,3,0,4,2]
let val = 2

removeElement(nums, val)





// var removeElement = function(nums, val) {
//     let k = 0, lastIndex = nums.length - 1

//     while (k <= lastIndex){
//         if (nums[k] === val){
//             nums[k] = nums[lastIndex]
//             lastIndex--
//         } else {
//             k += 1
//         }
//     }

//     return k
// };