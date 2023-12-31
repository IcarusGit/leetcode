/*
Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

Example 2:
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.

Example 3:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
*/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0

    // bale after ko ideclare yung profit mag luloop na ko then dadagdag dagdagan ko nalng yung profit
    for (let i = 1; i < prices.length; i++){
        // ang condition ay kung yung index ay mas malaki sa last index edi i miminus ko tapos saka ko i aadd sa profit since pag nag minus na yung dalawa 
        // pupunta naman na agad sa next index and matik negative na agad yun at shempre di rin pwedeng mag buy sa araw na yung kung mas maliit yung index
        if (prices[i] > prices[i-1]){
            profit += prices[i] - prices[i-1]
        }
    }
    return profit
};

let prices = [1,2,3,4,5]

console.log(maxProfit(prices))