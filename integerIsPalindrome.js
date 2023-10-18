/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //if x ay negative false na agad since palindrom hahanapin so sa negative sign di na agad palindrome
    if (x < 0) return false

    //first yung reverse number declare ko muna so unang value niya ay zero since di natin siya gagawin string
    let revNumber = 0
    //eto container lang siya para dun sa kukuning remainder bale kasi remainder yung kukunin then i-sstore yung remainder kay rev number
    let firstX = x

    // so loop lang habang di negative yung x
    while (x > 0){
        // yun revNumber * 10 para lang sa ones tens hundreds na part yan
        // yung x % 10 bale sa unang loop for example 456 % 10 ang sagot ay 6 so kinuha yung last digit then ginawa siyang value ng revNumber
        revNumber = (revNumber * 10) + (x % 10)
        //after non si x which is si initial value ididivide sa 10
        // ang result non magigign 45.6 then nag math.floor para makuha ko lang yung whole number which is si 45
        x = Math.floor(x/10)


        //now si 45 na ngayon ang new x ang then si rev number na ang value ay 6 magiging (6 * 10) + (x % 10)
        //si x % 10 ngayon magiging 45 % 10 at ang result niya ay 5
        // so magiging 60 + 5 magiging 65 
        // uliting lang tong process na to  para mabaliktad yung integer without making it a string
    }

    return revNumber === firstX
};



console.log(isPalindrome(456))

console.log(456 / 10)
