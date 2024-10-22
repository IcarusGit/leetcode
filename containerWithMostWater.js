/*
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49


Input: height = [1,1]
Output: 1
*/

/**
 * @param {number[]} height
 * @return {number}
 */
// HERE I FUCKING LEARNED HOW TO USE TWO FUCKING POINTERS
// ALGORITHM DIN YAN BOI KAYA WAWG MONG KALIMUTAN
// NOTE: ang formula ay length times width diba so work it out
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let maximumArea = 0

    while (left < right){
        // get the lower height of the two and ayun yung magiging LENGTH or HEIGHT mo
        // then MUMULTIPLY mo siya shempre SA WIDTH which is yung HABA
        // so yung width magiging yung (index ng nasa pinaka right) minus (index na nasa pinakaleft)
        let getAllPossibleArea = Math.min(height[left], height[right]) * (right - left)
        // so shempre kukunin ko nga diba lahat ng mga possible na Area... kada loop kukunin ko lang yung maximum kaya math.max
        maximumArea = Math.max(maximumArea, getAllPossibleArea)

        height[left] < height[right] ? left++ : right--
    }

    console.log(maximumArea)
    return maximumArea
};


height = [1,8,6,2,5,4,8,3,7]
maxArea(height)


