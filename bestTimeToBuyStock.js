/*
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // una nag declare muna ko nung pinaka profit shempre ininitialize ko to zero
    let profit = 0
    // eto naman dineclare ko na agad na yung 1st index ang pag bibilhan mo bale sa loop ko idedetermine yung lowest values
    let buyLow = prices[0]

    for (let i = 0; i < prices.length; i++){
        // icocompare ko lang dito yung pinakaminimum sa lahat ng indexex bale pag dumaan na dito yung pinaka mababa
        // siya naman na lagi magiging value ni buyLow so ayun sakanya mag babuy low shempre
        buyLow = Math.min(buyLow, prices[i]);

        // dito naman si profit shempre i mamath.max ko lang so kukunin ko lahat ng profit then ibalik niya yung pinakamataas na profit
        // bale icocompare niya yung mga profit na makukuha pati si prices[i] - buylow
        // shempre si buy low ka nag buy so mag miminus ka ngayon gamit yung mga remaining indexes or values na tatakbuhin nung loop
        profit = Math.max(profit, prices[i] - buyLow)
    }

    // then shempre ang irereturn mo lang ay yung profit shempre
    return profit
};

let prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))