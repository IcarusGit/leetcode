// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */


// *** NOTE: yung sub array ay mag kakadikit na indexes pero iba iba ng size so tinignan naten ngayon per sub array
var minSubArrayLen = function(target, nums) {
    // bale magigign left and right pointer ang gagawin naten dito so eto daw yun tinatawag na parang sliding window ganern

    // si sum yung paglalagyan ng mga sum shempre kada mag aadd tayo nung mga value ng sub array na meron
    // tas si minimum value naman inassign as infinity kasi possible na yung parameter or yung given ay di umabot sa target kahit isang buong array pa
    // si left pointer nilabas nalang di ko na sinama sa function
    let sum = 0;
    let minVal = Infinity;
    let left = 0;

    for (let right = 0; right < nums.length; right++){
        // ngayon sa umpisa ng loop shempre nasa both na index 0 si left and right
        // so first since si right lang ang tatakbo muna shempre siya rin yung laging i aadd sa sum
        sum += nums[right];

        // ngayon dito habang add ng add sa sum mag checheck na ngayon kung yung sum ba ay lagpas na or equal sa target since yun yung condition ng challenge e
        while (sum >= target){
            // kapag lumagpas na bale i-uusog na naten si left pointer para macheck yung other sub array
            // so dahil dyan kung nameet na si target shempre uusog na tayo ng sub array pero...
            

            // icheck ngayon naten si value since eto naman talaga yung irereturn naten
            // compare naten si minVal which is infinity para at first eh parang 9999999 lang muna siya 
            // SO BAKIT right + 1 - left OR right - left + 1 ---> KUNYARE SA SUB ARRAY ANG LENGTH ANG HINAHANAP RIGHT SO SI RIGHT ANG DULO...
            // kunyare ang size ng array ay 10 tapos nasa index 8 ka which is pang 9 na size diba yun yung reason ng (right + 1)
            // ngayon bakit may minus left (- left) ---> kasi what if nag left++ ka na like nameet na yung target tas inusog mo na si left pointer
            // so shempre pag sinukat naten yung size nung sub array, dapat di na kasama don si left so imaminus nalang naten siya
            // kumbaga example si left nasa index 2 and then si right nasa index 4 SO ANG SIZE NA MERON TAYO CURRENTY DAPAT 2 LANG 
            // so ang mangyayare, nasa index 4 + 1(etong 1 ay yung plus naten since 0 start ng mga index) - left (i minus naten si left para makuha yung currSize na si 2)
            minVal = Math.min(minVal, right + 1 - left);


            // babawasan naten si sum nung kung ano man yung value nung current nums[left] naten KASI SHEMPRE INALIS MO NA NGA BAT MO PA IIWAN VALUE NIYA
            // SO KUNG LUMIPAT NA TAYO DI NA INCLUDED SI LEFT SA SUB ARRAY EDI I MINUS NA SIYA SA SUM
            sum -= nums[left];

            // so eto na dito na umusog si left pointer 
            left++;
        }
    }

    // dito ichecheck lang naten kung may minValue ba kasi nga if ang input ay  [1,1,1,1,1,1,1,1] bale di papasok dun sa while loop so infinity parin ang value
    return minVal === Infinity ? 0 : minVal;
};

let target = 7, nums = [2,3,1,2,4,3];
// target = 4, nums = [1,4,4]
// target = 11, nums = [1,1,1,1,1,1,1,1]

console.log(minSubArrayLen(target, nums))