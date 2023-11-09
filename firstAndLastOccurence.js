/*
Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // IMPORTANT: ETO PINAKA LESSER LINES OF CODES TAS MADALI LANG BALE SA BABA NAMAN PARA LANG MA EXERCISE UTAK MO HAHAHA
    /*
    let first = nums.indexOf(target)
    let last = nums.lastIndexOf(target)
  
    return [first, last]  
    */
  
    // declare ko na agad na -1 para if walang mahanap pag nag loop edi -1
    let first = -1, last = -1;
  
    for (let i in nums){
        // si nums[i] === target i aassign na naten agad si i or si index kay first and last
        if (nums[i] === target){
            // pero if si first ay -1 dun lang siya ma assignan ng value shempre
            if(first === -1){ first = i}
    
            // then dito sa unang match ng first kung ano value ni first ganun din value ni last
            // since naka condition si first pag nag increment na ulit yung loop edi magiging value na ni last kung ano man yung i na mag mamatch ulit
            last = i
        }
    }
  
    return [first, last]
};

let nums = [5,7,7,8,8,10], target = 8

console.log(searchRange(nums, target))

