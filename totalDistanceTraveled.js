/*
Example 1:
Input: mainTank = 5, additionalTank = 10
Output: 60
Explanation: 
After spending 5 litre of fuel, fuel remaining is (5 - 5 + 1) = 1 litre and distance traveled is 50km.
After spending another 1 litre of fuel, no fuel gets injected in the main tank and the main tank becomes empty.
Total distance traveled is 60km.

Example 2:
Input: mainTank = 1, additionalTank = 2
Output: 10
Explanation: 
After spending 1 litre of fuel, the main tank becomes empty.
Total distance traveled is 10km.
*/
/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
// BALE ETO BIGAY NI CHAT GPT PAMPABILIS PERO DI KO TLGA MAGETS SO YUNG FUNCTION SA BABA YUNG ALTERNATIVE TAS MAS MAGEGETS
var distanceTraveled = function(mainTank, additionalTank) {
    if (mainTank === 0) return 0;

    const fullSets = Math.floor(mainTank / 5);
    const remainingTanks = mainTank % 5;
    const additionalMiles = fullSets * 4 * 10; 
    const remainingMiles = Math.min(remainingTanks, additionalTank) * 10;

    return additionalMiles + remainingMiles;
};


function alternative(mainTank, additionalTank) {
    let totalMileageOrMiles = 0

    // bale eto pang check lang if below 5 para mabilis ma execute yung function less time consumed
    if (mainTank < 5) return mainTank * 10;

    // so shempre kada miles edi +10 then kapag divisible siya kay 5 ibig sabihin nameet niya na yung 5 tanks so additional--
    // then mainTank++ para isang loop pa ulet
    for (let i = 1; i <= mainTank; i++){
        totalMileageOrMiles += 10

        if (i % 5 === 0 && additionalTank > 0){
            mainTank++
            additionalTank--
        }
    }

    return totalMileageOrMiles
};