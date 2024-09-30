// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// Use >> when you want to preserve the sign of the number (for signed integers).
// Use >>> when you want a logical right shift, which fills with 0 and is often used when working with non-negative integers.

// BASIC CODE NG PROBLEM NA TO HAHAHAH HAYOP
// countBits = n => n.toString(2).split('0').join('').length;
function countBits(n) {
    // Program Me
    let count = 0;
    // i convert muna for malaking int talaga para di magkaproblem pag big number
    n = BigInt(n);

    // NOTE: yung mga 1n and 0n na yan need yan sa mga simpleng integer lang since nag wowork nga tayo with BigInt kase
    // NOTE: ensures that the operation is performed using BigInt arithmetic
    while (n > 0n) {
        console.log(`n is : ${n} --- count is: ${count} --- Binary: ${n.toString(2)}`)
        // BALE NO NEED NA i convert to binary kasi matik na yon kapag nag >>> ka
        // so ngayon nag AND lang ako kasi diba 0 and 0 = 0, 0 and 1 = 0, 1 and 1 = 1
        // so ngayon kung both 1 sila edi mag + 1 lang ako sa count since bibilangin lang naman yung ilan yung 1 sa bit

        // etong si Number() ay para maconvert yung 1 or 0 to number parang typecasting lang like para maging integer ganun
        // bale and magiging result kasi neto ay naka BigInt parin kaya ginamitan naten ng Number
        count += Number(n & 1n);

        // tapos eto ang ginawa neto shinishift lang para bilangin ko yung 1 so from the right to the left
        // check nalang din yung console log at note sa taas
        n = n >> 1n;
    }
    return count;
};

console.log(countBits(9320764894))


// n = 1234
// console.log(n.toString(2).split('0').join('').length)
// [
//     '1', '', '11',
//     '1', '', '1',
//     ''
// ]
// 11111


// n is : 1234 --- count is: 0 --- Binary: 10011010010
// n is : 617 --- count is: 0 --- Binary: 1001101001
// n is : 308 --- count is: 1 --- Binary: 100110100
// n is : 154 --- count is: 1 --- Binary: 10011010
// n is : 77 --- count is: 1 --- Binary: 1001101
// n is : 38 --- count is: 2 --- Binary: 100110
// n is : 19 --- count is: 2 --- Binary: 10011
// n is : 9 --- count is: 3 --- Binary: 1001
// n is : 4 --- count is: 4 --- Binary: 100
// n is : 2 --- count is: 4 --- Binary: 10
// n is : 1 --- count is: 4 --- Binary: 1



// function countBits(n) {
//     let count = 0; 
//     console.log(`Initial number: ${n}`); 
//     while (n > 0) { 
//         count += n & 1; 
//         n = n >>> 1;
//     }
//     console.log(`Final count of 1 bits: ${count}`); 
//     return count; 
// }
  

// let number = 2380491263;
// console.log(countBits(number)); 





