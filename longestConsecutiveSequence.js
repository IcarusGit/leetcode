/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0 || nums === null) return 0;
    
    const numSet = new Set(nums);

    let largest = 0;

    for (let i = 0; i < nums.length; i++){
        if (!numSet.has(nums[i] - 1)){
            let currSeqLength = 0;
            while (numSet.has(nums[i] + currSeqLength)){
                currSeqLength++;
            }

            largest = Math.max(currSeqLength, largest);
        }
    }

    return largest;
};