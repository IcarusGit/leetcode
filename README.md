# leetcode
npm install after cloning


# to shorten console.log
*kapag tinatamad kang mag type ng console.log gawin mo to HAHAHAHAH makapython
let print = console.log
print("Sebastian Icarus C. Joson")


#-----------------------
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romans = [[1000, 'M'],[900, 'CM'],[500, 'D'],[400, 'CD'],[100, 'C'],[90, 'XC'],[50, 'L'],[40, 'XL'],[10, 'X'],[9, 'IX'],[5, 'V'],[4, 'IV'],[1, 'I']]

    let str = ""

    for(let i = 0; i < romans.length; i++){
        while(num >= romans[i][0]){ str += romans[i][1]; num -= romans[i][0] }
    }
    return str
};