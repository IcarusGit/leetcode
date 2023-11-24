


// function find(num,target){
//     let left = 0
//     let right = num.length - 1
//     let mid = null

//     // if (num[left] === target) return 0
//     // if (num[right] === target) return right

//     while (left <= right){
//         let mid = Math.floor((right + left) / 2)

//         if(num[mid] > target){
//             right = mid - 1
//         } else if (num[mid] < target){
//             left = mid + 1
//         } else {
//             return mid
//         }
//     }
//     return mid === target ? left : -1 // or mid
//     // di ko sure hahaha

// }


let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let target = 18

// console.log(find(num,target))

function recursionPractice(num, target, left, right){
    // means the left is greater than right so walang index na nahanap kaya negative 1 ang ireturn
    if (left > right) return -1

    // NOTE: WAG KALIMUTANG MAG Math.floor() kase shempre pag odd ang nakuha mong total magkakaroon ng decimal. Wag kang gunggong! hahaha
    let mid = Math.floor((left + right) / 2)

    // una shempre kung si current na middle at equals sa target edi return mo na yang si mid index na yan
    if (num[mid] === target) return mid

    // then next naman, what if mas malaki si current sa target edi shempre... si left ngayon magiging mid + 1
    else if (num[mid] < target){
        // NOTE
        // IMPORTANT!!!
        // need lagyan ng return hindi pwedeng tatawagin mo lang yung recursive function
        // kapg walang return mag iinifinite loop lang siya so mag kaka error na maximum stack limit ganern
        // KUMBAGA KAPAG WALANG RETURN EDI HINDI SIYA MAG EEXIT MAG RURUN LANG SIYA NG MAGRURU... RECURSION KUMBAGA
        return recursionPractice(num, target, mid + 1, right)
    } else {
        return recursionPractice(num, target, left, mid - 1)
    }
}

function alternative(num, target){    

    return recursionPractice(num, target, 0, num.length -1)
}

console.log(alternative(num,target))

/*
When you don't return the recursive calls in the else if and else statements, 
the function will continue executing the subsequent code even after the recursive call, leading to an infinite loop. 
This causes a stack overflow, resulting in the "maximum stack exceeded" error.

By returning the result of the recursive calls, 
you ensure that the function exits after making the recursive call and returns the result to the previous level of the call stack. 
This way, the recursion unwinds, and each recursive call returns its result until reaching the initial call.
*/