/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // so ang need kasi ay hanapin yung mga nawawalang number pero yung given na length ay yun din dapat yung mga number na cinocontain niya
    // so ang ginawa ko ay nilagay ko nalang sa set 
    let numSet = new Set(nums);

    //bale eto yung irereturn ko na container array
    let outputArr = [];

    // bale nag loop ako starting to 1 since 1 - n ang range 
    for (let i = 1; i <= nums.length; i++){
        // so dito simpler lang bale kung wala siya sa may set ko then it means siya yung missing kaya naman ipupush ko lang siya sa outputArr
        if(!numSet.has(i)){
            outputArr.push(i);
        }        
    }

    return outputArr;

    
};

let nums = [4,3,2,7,8,2,3,1]
// let nums = [1,1]

console.log(findDisappearedNumbers(nums));