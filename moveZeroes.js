/*
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // mero tayong two pointer which is si left and right
    // this time imbis na si left ay nasa left at si right ay nasa right NGAYON... SAME NA SILANG NAKAPOINT SA LEFT MUNA
    let left = 0, right = 0;
    
    // bale ang mangyayare kase ay si left yung paglalagyan ng non zero then si right naman yung checker so kada loop si right laging mag iincrement 
    // since ichecheck ni right kung yung current index ba ay zero or non zero

    //mag lu-loop ako habang si right ay right < nums.length
    while(right < nums.length){
        // bale etong condition lang na ito yung need naten
        // checheck naten kung 0 ba sa current index
        // kung non zero siya edi ilalagay naten si current index dun sa current na kung nasaan si left 
        // bale pag babaliktarin naten siya so malamang ang laman ni left ay 0 so pag papalitin lang
        if(nums[right] !== 0){
            // so eto para lang di na tayo mag declare pa ng pangatlong variable para lang pagbaliktarin mga value
            // ang tawag dito ay desctructuring ===> CHECK YUNG COMMENT SA BABA BALE AFTER KO ICODE NAG SEARCH AKO NG MEANING KAY CHATGPT
            [nums[left],nums[right]] = [nums[right],nums[left]]

            // then shempre kung napagbaliktad na naten edi shempre ang current value ni left ay non zero 
            // SO SHEMPRE iincrement narin naten siya kung napagbaliktad na para next naman
            left++
        }
        right++
    }

    return nums
};

let nums = [0, 1, 0, 3, 12,9]


console.log(moveZeroes(nums))






/* IMPORTANT
destructuring assignment to achieve this swap by creating a temporary array with the values in reverse order and then assigning them back to the original indices.
*/