/*
Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // una eto yung last index ng nums1 since ang length niya ay yung m so nag minus lang akong 1
    let last1 = m - 1
    // same din to sa m pero this time siya naman si letter n
    let last2 = n - 1
    // eto naman since yung example sa taas or instruction na ang nums1 input ay yung mismong array na na may 0 values lang muna sa ibang index
    // bale ang main length niya ay yung length ng last1 at last 2 i aadd yon then i susubstract shempre sa 1 para sa index
    // SO IMAGINE ETO YUNG PINAKA DULONG INDEX NG NUMS 1 TALAGA
    let main = m + n - 1

    // una kukunin ko lahat ng index ni nums2 since yung mga array naman sa parameter ay naka sort na ng ascending so shempre si last index ng nums2 ang highest
    // bale ang condition ko dito ay last2 >= 0 ===> this is because kapag ang -1 na index ng nums2 ay === undefined
    // so shempre kung undefined edi stop na yung katarantaduhan na to
    while (last2 >= 0){
        // NOTE: di ko na chineck yung kung last1 ba ay negative since diba magiging undefined din siya
        // NOTE: dahil ang una namang magiging undefined ay si last2 

        // so ang nangyayare dito chinecheck ko kung yung last index ba ni nums2 ay higher sa last index ni nums1[m-1]
        // kung mas mataas si nums1 shempre need natin siya ilagay sa dulo hence nums1[main--]
        // IMPORTANT: notice na may mga -- or decrement yung mga key or index
        // IMPORTANT: dahil after mag execute nung code ko shempre need ko na ring mausog yung current pointer ko
        // IMPORTANT: so kunyare gumana yung if statement... nilagay ko na ngayon yung current last1 dun sa dulo which is si main--
        // IMPORTANT: so kung si main may laman na mag decrement na and then si last1 naman bale same parin kasi value niya di siya mapapalitan
        // so ngayon yung same value na yon sakanya na nakaturo si main tas si last1 naman umusog na so no need to worry na
        if(nums1[last1] > nums2[last2]){
            nums1[main--] = nums1[last1--]
        } else {
            // dito same naman so kung mas malaki si nums2 or equal sila... ilalagay ko lang sa right side or dun sa current [main] yung last2
            // then after non since nagdedecrement na ko so ang ichecheck nalang ay yung next index na after magdecrement shempre
            nums1[main--] = nums2[last2--]
        }
    }

    /* ALTERNATIVE */
    // // dito niloop ko lang yung buong nums2 then kada index niya sinalpak ko lang dun sa nums1
    // // after non sinort ko na hahahahaha pang tamad eh no!
    // for (let i = 0; i < n; i++){
    //     nums1[m++] = nums2[i]
    // }

    // // so dito triny ko yung .sort() lang bale may error siya sa testcase kasi ang nangyayare for example kapag may -1, -10, -1, -10
    // // and output niya ay -1, -1, -10, -10 KUMBAGA parang ang logic ng pagsort niya eh when it comes to alphabets ganern (base lang naman sa observation ko)
    // // so ngayon yung condition or yung arrow function sa loob ng sort pakicheck nalang yung cinomment kong mahaba sa baba
    // // oo nag chatgpt ako chinat gpt ko yang nasa baba need ko lang naman ng explanation kung bakit need ko pa yung condition na yan 
    // // so it means na kung b - a naman ang gagamitin mo eh magiging descending naman siya
    // // ALL GOODS POTAENA ANG HIRAP NG PROB NA TO
    // nums1.sort((a,b) => a - b)
};








// let k = 5
// console.log(k) // 5
// console.log(k++)// 5
// console.log(k)// 6

// let a = [1,2,3,4]
// console.log(a[-1]) // undefined

/*
When the sort method compares two elements a and b, it subtracts b from a. 
If the result is negative, it means that a should come before b in the sorted array.
If the result is positive, it means that b should come before a in the sorted array. 
If the result is zero, it means that a and b are considered equal in terms of sorting order.

In the case of (a, b) => a - b, if a is less than b, the result of a - b will be negative, and a will come before b in the sorted array.

So, for example, 
if you have an array like [3, 1, 2], when the sort method compares elements, it will first compare 3 and 1. (3 - 1) is positive, so it will swap them, 
resulting in [1, 3, 2]. Then, it will compare 3 and 2. (3 - 2) is positive, so it will swap them, 
resulting in [1, 2, 3]. This is how the array is sorted in ascending order.
*/