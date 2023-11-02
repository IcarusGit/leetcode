/*
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // if (nums.includes(target)) return nums.indexOf(target)
    // so nag lagay muna ko ng mga start at end index niya since mag bibinary search ako para konting loop lang mangyare
    // bale kasi kapag nag start ako sa umpisa tas checheck ko conditions ko edi paano kung 1000 yung length ng array diba so ang gagawin ko ngayon
    // kukunin kunin ko lang yung mga middle index hanggat sa makarating ako dun sa nearest
    let left = 0 
    let right = nums.length - 1

    // so etong dalawang to chineck ko lang agad kung nasa magkabilaang dulo malalagay yung mga target then return na agad yung index nila
    if (nums[left] > target) return 0
    else if ( nums[right] < target) return right + 1

    while(left <= right){
        let mid = Math.floor((right + left)/2)
        console.log(mid)
        console.log("==========")
        if (nums[mid] < target ){
            // kapag hindi ko nilagyan ng + or - 1 to edi mag luloop lang siya forever since magiging left <= right lang siya lagi
            // kasi kunyare index sa left ay 4 and then ang right ay 5, then kung kukunin ang mid ay 4.5 so magiging 4 si mid right?
            // kung yung nasa index 4 ay mas maliit sa target bale si target dapat malagay sa right niya which is yung next index
            // eh since sa function na to ang irereturn naten ay si left variable edi shempre ang mangyayare eh mag mimid + 1 ako
            // bakit? kung hindi ako mag +1 edi ang index na ibabalik niya ay yung current left ko edi hindi na siya malalagay sa to the right
            // ang mangyayare papalitan lang niya yung current so mali yon diba!

            // kausapin mo nalng ulit sarili mo habang ginagawa mo yung logic sa harap ng binary search example ng figure
            left = mid + 1
        } else if (nums[mid] > target){
            // same lang logic dito kumbaga kung si mid ay mas malaki kay right magiging right naman ngayon si mid pero mag miminus 1 ako 
            // so dito need ko mag minus 1 kasi katulad lang ng nasa taas mag luloop siya forever pag hindi
            right = mid - 1 
        } else {
            // etong condition na ito ay kung equal yung mid sa target so shempre return ko yung index na yon which is si mid
            return mid
        }
    }
    // so lagi kong irereturn si left since si left naman eh naka + 1 ako lagi so to the right nga
    return `the OUTPUT: ${left}`
    
    // //    ALTERNATIVE
    // for(let i = 0; i<nums.length; i++){
    //     if(target<=nums[i])
    //     return i
    // }
    // return nums.length
};

// let nums = [1,3,5,6,7], target = 4
let nums = [2,5,8,12,16,23,38,56,72,91], target = 22
console.log(searchInsert(nums, target))


// If the middle element is greater than the target:

// You know that the target, if present in the array, must be in the left half of the current range because it is smaller than the middle element.
// To focus on the left half, you adjust the right pointer to mid - 1. This essentially eliminates the right half from consideration.
// This adjustment is necessary to make the search space smaller and avoid getting stuck in an infinite loop if the target is not in the right half of the current range.


// If the middle element is smaller than the target:

// You know that the target, if present in the array, must be in the right half of the current range because it is larger than the middle element.
// To focus on the right half, you adjust the left pointer to mid + 1. This effectively eliminates the left half from consideration.
// This adjustment is crucial to prevent the algorithm from searching in the left half of the range indefinitely if the target is not present in the left half.
// If you remove the +1 and -1 adjustments in these cases, the binary search algorithm would not work correctly. Without these adjustments, you might end up with an infinite loop or incorrect results because the search range won't be properly reduced, and the algorithm will fail to find the target element or the correct insertion point.