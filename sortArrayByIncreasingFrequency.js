/*
Example 1:

Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
Example 2:

Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
Example 3:

Input: nums = [-1,1,-6,4,5,-6,1,4,1]
Output: [5,-1,4,4,-6,-6,1,1,1]
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    return nums.sort((a, b) => {
        if (map.get(a) === map.get(b)){
            return b - a;
        }

        return map.get(a) - map.get(b);


        /*
            THIS PART COULD ALSO BE WRITTEN LIKE THIS
            return (map.get(a) - map.get(b) || b - a)
        */
    });
   
};

// nums = [1,1,2,2,2,3];
// nums = [2,3,1,3,2];
nums = [-1,1,-6,4,5,-6,1,4,1];

console.log("====================")
console.log(frequencySort(nums));
console.log("====================")
console.log(undefined + 1) // NaN