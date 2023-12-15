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
    // gumawa muna ako nung paglalagyan ng maximum pati nung current peaks kada index
    let maxAltitude = 0
    let currentAltitude = 0

    for (let i = 0; i < gain.length; i++){
        // so shempre mag sstart sa 0 diba so ang ginawa ko equals 0 na muna yung max at current
        // so si current shempre iaadd ko lang sakanya si gain so possible maging negative or positive to basta add lang ng add 
        // para malaman yung mga narating niyang peaks
        currentAltitude += gain[i]
        
        // si max shempre i mamath.math ko yung pinakamataas na peak na narating niya
        // pag di mo nagets to check mo yung if statement na nakacomment para magets mo yung nangyayare
        maxAltitude = Math.max(maxAltitude, currentAltitude)
        // if (currentAltitude > maxAltitude){
        //     maxAltitude = currentAltitude
        // }
    }

    return maxAltitude
};

let gain = [-5,1,5,0,-7]

console.log(largestAltitude(gain))