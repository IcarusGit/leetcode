/*
Example 1:
Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

Example 2:
Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
*/
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxAltitude = 0
    let currentAltitude = 0

    for (let i = 0; i < gain.length; i++){
        currentAltitude += gain[i]
        maxAltitude = Math.max(maxAltitude, currentAltitude)
    }

    return maxAltitude
};

let gain = [-4,-3,-2,-1,4,3,2]

console.log(largestAltitude(gain))