// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

let trappingRainWater = (height) => {
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = height.length - 1;
    let totalWater = 0;

    while (left < right){
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        if (height[left] < height[right]){
            totalWater += leftMax - height[left];
            left++;
        } else {
            totalWater += rightMax - height[right];
            right--
        }
    }


    return totalWater;
}

let height = [0,1,0,2,1,0,1,3,2,1,2,1];

console.log(trappingRainWater(height));