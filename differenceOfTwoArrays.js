/*
Example 1:
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

Example 2:
Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    // bale kinuha ko muna lahat ng unique so ginawa kong set
    nums1 = new Set(nums1)
    nums2 = new Set(nums2)

    // then mag luloop ako sa nums1 kada number na nandun, kada unique num na nasa nums1 kumbaga
    for (let item of nums1){
        // kapag meron ding ganun item si nums2 edi idelete ko both kay nums2 and nums1 using yung delete() function
        if(nums2.has(item)){
            nums1.delete(item)
            nums2.delete(item)
        }
    }

    // then ireturn ko na ulit yung mga array na yon bale pwedering gumamit ng spread operator ha like
    // [[...nums1], [...nums2]]
    return [Array.from(nums1), Array.from(nums2)]
};

let nums1 = [1,2,3], nums2 = [2,4,6]

console.log(findDifference(nums1, nums2))