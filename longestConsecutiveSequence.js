/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // una chineck ko muna yung mga base case para di masyadong mag run pag ang input naman ay 0
    if (nums.length === 0 || nums === null) return 0;
    
    // then dito ginawa kong set yung array since titignan lang naman yung length ng consecutive mismo na number di naman per value
    const numSet = new Set(nums);

    // eto yung variable na largest bale mag cocompare kasi ako later shempre kung anong length mas mahaba so eto holder lang muna
    let largest = 0;

    for (let i = 0; i < nums.length; i++){
        // then next after ko mag loop dun sa mga array 
        // bale kada number kase ichecheck mo kung umpisa ba siya ng isang sequence
        // para macheck mo kung siya yung umpisa shempre ichecheck mo yung number - 1 like yung nasa left side niya or yung number before siya
        // kapag existing yon edi hindi siya yung umpisa like example
        // kapag ang number na pinopoint ay 2 tapos may 1 na existing edi bawal na yun or skip na agad since si 1 dapat ang start point

        // so eto dito if yung current index ay walang left side number or yung first bale dun tayo mag bibilang ng length
        if (!numSet.has(nums[i] - 1)){
            // shempre eto current length 0 muna so bakit...
            let currSeqLength = 0;

            // mag lu loop ako ngayon since kunyare ang index ay si 1 so ichecheck ko kung may 2 3 4 5.... etc etc
            // kaya may while set has or naglalaman nung nums[i] + 0 
            // bale 0 muna iaadd para sa loob ng while loop dun na ko mag iincrement
        
            while (numSet.has(nums[i] + currSeqLength)){
                // so dito 1 example ang index so chineck ngayon kung si set may 1 then may 2,3,4,5 tas kada check nag iincrement
                currSeqLength++;
            }

            // so shempre kada index i cocompare ngayon since kada index mag hahanap ng sequence e so i mamaximum ko ngayon kung sino largest
            largest = Math.max(currSeqLength, largest);
        }
    }

    return largest;
};