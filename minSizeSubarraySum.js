// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let minVal = Infinity;
    let left = 0;

    for (let right = 0; right < nums.length; right++){
        sum += nums[right];

        while (sum >= target){
            sum -= nums[left];
            minVal = Math.min(minVal, right + 1 - left);
            left++;
        }
    }

    return minVal === Infinity ? 0 : minVal;
};

let target = 7, nums = [2,3,1,2,4,3];
// target = 4, nums = [1,4,4]
// target = 11, nums = [1,1,1,1,1,1,1,1]

console.log(minSubArrayLen(target, nums))