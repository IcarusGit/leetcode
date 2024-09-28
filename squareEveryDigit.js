// function squareDigits(num){
//     if (num === 0) return 0
//     let str = "";
//     let lastNumTracker;
//     let numTracker = num;

//     while (numTracker > 0){
//         lastNumTracker  = numTracker % 10;
//         str = (Math.pow(lastNumTracker, 2)).toString() + str;
        
//         numTracker = Math.floor(numTracker/10);
//     }

//     return parseInt(str);
// }
  
  
  

const squareDigits = (num) => +num.toString().split('').map(int => (parseInt(int)**2)).join('');

console.log(squareDigits(2213))
  