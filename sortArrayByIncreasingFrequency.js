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
    // una muna gumawa ako ng map
    // REASON: kaya hindi ako gumamit nung kunyare let map = {}
    // kapag kasi object mismo ginamit ko... wala siya nung map.get at map.set so parang kaya naman kaso di ko trip yung syntax
    let map = new Map();

    for (let i = 0; i < nums.length; i++){
        // so nag loop lang ako sa nums array tapos nilagay ko siya sa map pero chineck ko shempre kung existing na
        // sa map.get pala kapag di pa existing si key dun sa map bale UNDEFINED ang ibabalik niya so ang ganap ko ay nag or ako ||
        // para if wala pa siya dun edi ilagay ko value niya ay 0 then + 1 na lagi
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    return nums.sort((a, b) => {
        // bale dito kasi diba kapag a-b ascending then b-a descending
        // so first chineck ko muna kung same si map.get(a) at map.get(b) 
        // bale kasi need na kung same sial frequency, ang mauuna ay yung mas malaki so parang 
        // [1,3,3,2,2] --> yan parang ganto kay 3 and 2 so yan ang ganap ng if na to
        if (map.get(a) === map.get(b)){
            return b - a;
        }

        // then next is yung normal na 
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