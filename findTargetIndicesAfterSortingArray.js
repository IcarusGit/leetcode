/*
Example 1:
Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.

Example 2:
Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.

Example 3:
Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// note lang na etong function na ito ay olats bale yung FUNCTION KO SA BABA
// 99% siya so mas better pero kasi kaya eto yung pinakita ko kase mas better to kung malaki ang length ni nums array
var targetIndices = function(nums, target) {
    // so una palang chineck ko na shempre kung included ba para kung wala naman edi wag ko na sayangin oras ko
    if (!nums.includes(target)) return []
    // ETO SHEMPRE NEEDED TO COMMON SENSE SINCE ANG I-OOUTPUT MO AY ARRAY NG INDICES
    let output = []

    // sort ko lang ng ascending since needed e
    nums.sort((a,b) => a-b)

    // then mag binary search ako para kapag maraming laman yung array eh mas konting iteration lang mangyayare
    let left = 0
    let right = nums.length - 1
    let mid

    // so ngayon paano kapag ang length ay 100 tapos yung target ay 100 ganun edi 100 iterations yon
    // so much better may binary search
    while(left <= right){
        mid  = Math.floor((left + right) / 2)

        // bale dito wala kong condition na ===
        // kapag mas malaki yung mid or equal siya sa target i modify ko lang agad si right tas dedmahin na
        // bale need kasi na konting iterations lang diba so ang goal ay ilagay si left sa unang occurence ni target para konting iteration lang
        // so check mo nalnag yung logic kuha ka papel tas gawin mo don para malaman mo bat right = mid - 1 kapag less than or equal
        // NOTE: basta tandaan mo lang na need naten na ilagay si left sa unang occurence ni target para konting loop lang
        if (nums[mid] >= target){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }


    // so nahanap na naten si left or kung saan tayo unang mag uumpisa
    // bale dito obviously mag luloop nalang ako then kung si nums[i] ay === sa target edi shempre push ko yung index niya
    // then return ko lang yung output shempre
    for (let i = left; i < nums.length; i++){
        if(nums[i] === target){
            output.push(i)
        }
    }

    return output    
};

// [1,2,2,3,5]
let nums = [1,2,5,2,3], target = 2;

// let nums = [1,2,5,2,3], target = 3


console.log(targetIndices(nums, target))


// ALTERNATIVE (LINEAR) ISANG DIRETSUHAN NA!!!!
// so eto siguro naman no need explanation na eto andyan naman na lahat e diba!

/*
var targetIndices = function(nums, target) {
    if (!nums.includes(target)) return []
    let output = []
    nums.sort((a,b) => a-b).forEach((value, index) => {
        if (value === target){
            output.push(index)
        }
    })

    return output


};
*/