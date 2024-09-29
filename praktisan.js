let logs = [
    "2022-12-29 14:00:00.150 Receiving: Execution Report",
    "2022-12-29 14:00:00.584 Sending: Execution Report",
    "2022-12-29 14:00:00.293 Receiving: Execution Report",
    "2022-12-29 14:00:00.728 Sending: Execution Report",
    "2022-12-29 14:00:00.325 Receiving: Execution Report",
    "2022-12-29 14:00:00.925 Sending: Execution Report",
];

// ========================================================================================================

function getMilliseconds(timestamp){
    let [hours, minutes, secondsWithPoint] = timestamp.split(":")
    // let [seconds, ms] = secondsWithPoint.split(".")

    return +(
        parseInt(hours) * 3600 * 1000 +
        parseInt(minutes) * 60 * 1000 +
        parseFloat(secondsWithPoint) * 1000
    );
}

// ========================================================================================================

let receivingTimes = []
let sendingTimes = []

for (let data of logs){
    let part = data.split(" ")
    // console.log(part)

    let timestampToStore = part[1];

    // can also be ----> (log.toLowerCase().includes("receiving".toLowerCase()))
    if (data.includes("Receiving")){
        receivingTimes.push(getMilliseconds(timestampToStore))
    } else if (data.includes("Sending")){
        sendingTimes.push(getMilliseconds(timestampToStore))
    }
}

// ========================================================================================================

let differences = []

for (let i in receivingTimes){
    differences.push(Math.abs(receivingTimes[i] - sendingTimes[i]));
}

// console.log(differences)

// ========================================================================================================

// Calculate minimum, maximum, average, and median
differences.sort((a, b) => a - b);
let minimum = differences[0];
let maximum = differences[differences.length - 1];
let sum = differences.reduce((a, b) => a + b, 0);
let average = Math.floor(sum / differences.length);

// chineck lang si differences array kung ang length ay even kasi kung even siya bale ang median ay yung average nung dalawang nasa gitna
// kung odd kasi ang lenght edi may gitna na agad
// so ayun lang naman
let median = differences.length % 2 === 0
  ? Math.floor((differences[(differences.length / 2) - 1] + differences[differences.length / 2]) / 2)
  : differences[Math.floor(differences.length / 2)];


// Output the results
console.log(`Minimum: ${minimum} ms`);
console.log(`Maximum: ${maximum} ms`);
console.log(`Average: ${average} ms`);
console.log(`Median: ${median} ms`);























// let text = "2022-12-29 14:00:00.150 Receiving: Execution Report";
// let logs = text.split(" ");
// let timestamp = logs[1] + ':' + logs[2];

// console.log(logs); 
// console.log("============="); 
// console.log(timestamp); 

// function getMicroseconds(timestamp) {
//     let parts = timestamp.split(':');
//     let seconds = parseFloat(parts[2]); // includes milliseconds
//     return seconds * 1000; // convert to microseconds
// }

// console.log(timestamp.split(':'))