// Example 1:

const { max } = require("moment");

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

/**
 * @param {number[]} nums
 * @return {number}
 */

// NOTE LANG ULIT NA SI SUB ARRAY AY MAGKAKADIKIT LIKE ARRAY SO LIKE DI KA PWEDENG TUMALON GANERN
// MAGKAKADIKIT NA INDEX IN SHORT GANER
let maxSubArray = (nums) => {
    //  eto as usual base case getter lang pampataas ng percent beaten lang keme 
    if (nums.length === 1) return nums[0];

    // etong variable na to yung mismong irereturn naten so first value niya ay si first index kasi shempre kung 1 lang ang laman edi yun na rin ibabalik
    let output = nums[0];
    // si currrent Sum naman would be the tracker so eto yung dinadagdagan per index
    let currSum = 0;

    // bale first is mag luloop tayo dun sa array then 
    for (let i in nums){
        // so una is eto so ang logic neto ay kung negative yung number or yung currentSum naten edi shempre ignore lang yun so ang default ngayon shempre ay 0
        // so ang line na to ay pwedeng
        
       /*
        currSum = currSum < 0 ? 0 : currSum;
        OR
        currSum = Math.max(0, currSum);
        */
        if (currSum < 0) {
            currSum = 0;
        }

        // so after icheck kung si current sum ba ay negative or kung ano man siya...
        // edi next ay iaadd lang ulit naten si next index
        // bale ang nangyayare kase ay parang si right pointer si loop tapos yung left pointer bale wala na siya
        // ang nangyayare nalang ay kung negative yung number malamang mas bababa yung currentSum so matik na na kino cross out naten yun
        currSum += nums[i];

        // so eto dito lang nangyayare yon so pano malalaman na na cocrossout yung mga number na nag papababa sa sum
        // bale dito kasi nag mamath.max na ko between kay output at currSum
        // so kada index ay nag cocompare or binibitbit ko na si value na pinakamataas since cinocompare ko nga siya sa bawat currSum
        output = Math.max(output, currSum);
    }

    return output;
};

nums = [-2,1,-3,4,-1,2,1,-5,4]
// nums = [1]
// nums = [5,4,-1,7,8]
// nums = [5,4,-1,7,8]

console.log(maxSubArray(nums))
