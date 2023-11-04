// https://byby.dev/js-binary-to-decimal#:~:text=If%20you%20pass%20a%20binary,number%20as%20a%20decimal%20number.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // NOTE: triny ko tong mga parseint kaso namamali siya kapag BigInt na mga testcase
    // let a1 = parseInt(a, 2)
    // let b2 = parseInt(b, 2)

    // dito naman para kasi maging decimal yung isang binary number mag aappend ka sa first letter or parang sa leftside nila ng
    // "0b" so ayun yung ginawa ko so string siya ganun oo
    let a1 = `0b${a}`
    let b2 = `0b${b}`


    // then after non ginawa kong bigint kasi shempre para sa mga testcases na malalaki 
    // ngayon binalik ko siya as a string gamit yung toString() na function
    // so shempre ngayon alam mo na na kapag 2 binary then kapag 10 naman decimal so naglagay ako sa toString() ng toString(2)
    return (BigInt(a1) + BigInt(b2)).toString(2)    

    // by the way etong problem na ito pwede nga siyang one liner eh so magiging ganito siya
    // IMPORTANT / ONE LINER!!! 
    // return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
};  

