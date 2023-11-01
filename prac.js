


function find(num,target){
    let left = 0
    let right = num.length - 1

    // if (num[left] === target) return 0
    // if (num[right] === target) return right

    while (left <= right){
        let mid = Math.floor((right + left) / 2)

        if(num[mid] > target){
            right = mid - 1
        } else if (num[mid] < target){
            left = mid + 1
        } else {
            return mid
        }
    }
    return left

}


let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let target = 20

console.log(find(num,target))