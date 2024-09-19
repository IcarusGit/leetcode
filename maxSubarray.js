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
let maxSubArray = (nums) => {
    if (nums.length === 1) return nums[0];

    let output = nums[0];
    let currSum = 0;

    for (let i in nums){
        if (currSum < 0) {
            currSum = 0;
        }

        currSum += nums[i];
        output = Math.max(output, currSum);
    }

    return output;
};

nums = [-2,1,-3,4,-1,2,1,-5,4]
// nums = [1]
// nums = [5,4,-1,7,8]
// nums = [5,4,-1,7,8]

console.log(maxSubArray(nums))