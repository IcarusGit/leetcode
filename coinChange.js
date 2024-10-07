/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */



// If minCoinsDP[i - coin] == Integer.MAX_VALUE, it means that the subproblem for the amount i - coin has no solution yet (it's unreachable). 
// In that case, we shouldn’t attempt to use that coin because there is no valid way to form i - coin.
function coinChange(coins, amount) {
    if (amount < 1) return 0;

    let table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;


    for (let i = 1; i <= amount; i++){
        for (let coin of coins){
            if(coin <= i && table[i-coin] !== Infinity){
                table[i] = Math.min(table[i], 1 + (table[i - coin]));
            }
        }
    }

    return table[amount] === Infinity ? -1 : table[amount];

};


let coins = [1,2,5], amount = 11;
console.log(coinChange(coins, amount));



/*
Let's say you had coins = [1, 2, 5] and amount = 3:

Without the check, the code would attempt to compute 1 + minCoinsDP[i - coin] even when i - coin results in Integer.MAX_VALUE.

For i = 3 and coin = 5, since 5 > 3, the loop won't run, and thus it won't make a difference. But if you had other coins that can contribute, the results would be incorrect.
*/

// NOTE: SO THE PROBLEM AY MAY GIVEN NA ARRAY OF NUMBERS/COINS AT KAHIT ILANG COINS MERON KA NUN UP TO INFINITY
// BALE [1,2,5] kunyare bale kahit si 2 pesos coin pwedeng meron kang 100 pieces niyan basta wag mo muna isipin yung count per count


/* JAVA SOLUTION:

class Solution {
    public int coinChange(int[] coins, int amount) {
        // so first ay edge case muna so if amount is 0 then return 0 ofcourse
        if (amount < 1) return 0;

        // ngayon gumawa ako ng table or new array tas ang size niya ay yung amount + 1
        // bale kaya may + 1 kasi diba array siya so kung 11 ang amount then gumawa ako ng array na 11 ang length bale si last index non ay 10
        // so nag + 1 ako
        // NOTE: sa java kapag nag declare ka ng ganitong array, ang default value ng lahat ng index ay 0 muna so from index 0 to index 11(11 din si sample amount) ay 0 
        int[] table = new int[amount + 1];

        for (int i = 1; i <= amount; i++){
            // ngayon nag loop ako per index pero nag umpisa ako kay 1 since sa index 0 or kay amount 0 ay need mo ng 0 coin para makuha yon so as is na si 0 as value niya
            // ngayon bago lagyan ng laman yung current index ay nag assign muna ko as Infinity siya para pag nag check tayo next time eh malalaman naten kung may laman na ba si index na to
            table[i] = Integer.MAX_VALUE;

            for (int coin : coins){
                // now nag for each loop lang ako sa available coins then chineck ko lang kung si coin <= i...
                // coin ba ay mas maliit sa i/amount shempre kung si (amount/currentindex sa for loop sa labas) mas maliit sa coin na yun edi not possible so lipat na agad sa next coin

                // also chineck ko rin si table[i - coin] != Integer.MAX_VALUE -----> bale kasi si amount/currIdx imiminus ko sakanya yung coin na meron ako 
                // tapos yung answer non for example si amount/currIdx == 8, then and current coin ko ay si 5 bale ang gagawin ko ay i - coin OR 8-5
                // ANG SAGOT AY 3 RIGHT? ngayon shempre kung nasa 8 na index na tayo, since naka loop tayo from index 0 as the start, for sure sa index 3 may laman na kung ilan yung minimum na coin para makuha si index 3
                // so ngayon ichecheck lang ni (table[i - coin] != Integer.MAX_VALUE) kung may laman na si index na to
                if(coin <= i && table[i - coin] != Integer.MAX_VALUE){

                    // so same halos sa explanation sa taas so kung 8-5 bale si 5 na pinang minus is isang coin na agad yun
                    // hence kaya may 1 +
                    // then i paplus ko si 1 coin na yon sa kung ilang coin ang need para makuha si (i-coin)
                    // TAPOS SHEMPRE NAKA Math.min para malaman pinaka best answer since ichecheck nman lahat ng coin e at ang tanong ay kung ilan ang least na coin din pati
                    table[i] = Math.min(table[i], 1 + table[i-coin]);
                }
            }
        }

        return table[amount] == Integer.MAX_VALUE ? -1 : table[amount];
    }
}

*/
