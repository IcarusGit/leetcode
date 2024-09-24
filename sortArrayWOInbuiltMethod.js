/*
    Example 1:

    Input: nums = [5,2,3,1]
    Output: [1,2,3,5]
    Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
    Example 2:

    Input: nums = [5,1,1,2,0,0]
    Output: [0,0,1,1,2,5]
    Explanation: Note that the values of nums are not necessairly unique.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // first is base case muna so kung 1 lang ang laman return na agad naten si nums
    if (nums.length <= 1) return nums;

    // so bale gagamit tayo ng RECURSION
    // and idea ay hahatiin natin ng hahatiin si nums hanggat sa makarating siya sa dulo where in magiging array siya pero 1 element lang

    // so now kunin ko muna si gitna
    let mid = Math.floor(nums.length / 2);

    // NOTE: SA LEFT AND RIGHT NEED MO TALAGA SIYANG TAWAGIN GAMIT YUNG sortArray() na function para mag recursion
    // NOTE: bale kasi kung di mo siya tatawgin edi isosort lang niya mismo si left and right lang tapos tapos na agad instead of hahatiin muna hanggang dulo
    // NOTE: hahatiin katulad nung sinabi ko sa taas na mahahati left and right until maging 1 lang ang length 

    // ngayon naman si left side ng array ay shempre from index 1 to mid
    // NOTE: SLICE AY INCLUDED SI 0 (FIRST PARAMETER) THEN EXCLUDED SI MID (SECOND PARAMETER)
    let left = sortArray(nums.slice(0, mid));
    // then eto shempre si other side naman eto yung isa pang kalahati
    let right = sortArray(nums.slice(mid));

    // then tatawagin na naten yung pag merge so i memerge lahat ng mga hinati hati
    return merge(left,right);
};

let merge = (left, right) => {
    // ngayon dito sa merge shempre kada nag hihiwalay yung mga array eh need ko ng container para ilagay sila pero ilalagay ko ng sorted na
    // so eto yung container na yon
    let sortedArray = []
    // etong dalawa magiging pointer ko ngayon (SEE EXAMPLE BELOW NALANG FOR EXPLANATION)
    let i = 0; j = 0;

    // eto obvious naman kung sino mas mababa siya yung una kong ipupush bale kasi ang trip ko ay ASCENDING
    while (i < left.length && j < right.length){
        if (left[i] > right[j]){
            sortedArray.push(right[j]);
            j++;
        } else {
            sortedArray.push(left[i]);
            i++;
        }
    }
    // kung mapapansin yung algo sa while loop, kapag yung i or j ay for example same sila na ang length ay 3
    // then si i ang nauna maging 3 after ng i++
    // 3 < 3 ang lalabas so di na tatakbo si while loop tama?
    // ang nangyare ngayon yung nakay i or nakay left[i] lang ang napush sa array so may naiwan pang isang index na nakay right[j]
    // di siya na ipush kasi sa while loop eh nag stop na ang condition

    //kaya ngayon ay nag concat ako para maipasok yung naiwan so may time na si left or right ang maiiwan kaya concat nalang
    // bale si sorterd array nag concat tayo ng either left or right
    // so bakit slice nasa loob? kasi shempre kung 3 ang length tas may maiiwan diba either i or j
    // so may isa sakanila na 2 ang length so kapag inislice ko si 2 so ang mangyayare ay inislice ko si last index since kung 3 ang length edi index 2 ang pang third
    // ngayon yung isang slice sabihin natin slice(i) eh si i yung naunang maging 3 kunyare... wala naman ilalabas yan since yung last index ay 2
    // so kung slice(3) edi walang ibabalik or wala kang makukuha dyan na need i push
    return sortedArray.concat(left.slice(i).concat(right.slice(j)));



    // KUNG GUSTO MO NAMAN MAS MAGETS YUNG LINE 71 PWEDE NAMANG GANITUHIN MO NALANG
    while(i < left.length){
        sortArray.push(left[i]);
        i++;
    }

    while (j < right.length){
        sortedArray.push(right[j]);
        j++;
    }

    return sortedArray;
}

let nums = [5,2,3,1,4,9,11];
// let nums = [5,1,1,2,0,0];

console.log(sortArray(nums));


/*
How does merging "sort"?
Initial condition: After splitting the array, you're left with multiple one-element arrays (which are already sorted). For example:

left = [4]
right = [2]
Comparison: The merge function compares elements from the left and right arrays.

In the first comparison, it checks if 4 < 2 (it isn't), so it pushes 2 (the smaller value) into the sorted array.
The sorted array is now [2].
Remaining elements: After the comparison loop, any leftover elements in left or right are added to the sorted array. In this case, 4 is added after 2, giving the result [2, 4].

Return: This newly merged array [2, 4] is returned up the recursive stack, where it will be merged again with other sorted subarrays.

Step 4: Recursion merges back larger arrays
As you recursively merge these sorted arrays, you’re effectively sorting the entire original array.

For example:

Split: Start with an array like [4, 2, 5, 1].

Recursive splits: You split it into [4, 2] and [5, 1].

Further recursive splits:

[4, 2] becomes [4] and [2].
[5, 1] becomes [5] and [1].
Merge sorted arrays:

[4] and [2] merge to [2, 4].
[5] and [1] merge to [1, 5].
Merge the sorted subarrays: Finally, [2, 4] and [1, 5] are merged to give [1, 2, 4, 5].

Summary:
Splitting doesn’t sort the array; it just breaks the array into smaller pieces.
Sorting happens during the merging process, where comparisons are made, and the smaller values from the left and right subarrays are placed into a new sorted array.
*/






//===========  FOR SMALL ARRAYS  ===========

// let array = [5,7,2,4,9,6];

// function sort(array){
//     for (let i = 0; i < array.length; i++){

//         for (let j = i + 1; j < array.length; j++){
//             if (array[i] > array[j]){
//                 // let temp = array[i];
//                 // array[i] = array[j];
//                 // array[j] = temp;
//                 [array[i], array[j]] = [array[j], array[i]]
//             } else {
//                 continue;
//             }
//         }

//     }   

//     return array
// }

// console.log(sort(array));