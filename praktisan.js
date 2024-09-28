let text = "2022-12-29 14:00:00.150 Receiving: Execution Report";
let logs = text.split(" ");
let timestamp = logs[1] + ':' + logs[2];

console.log(logs); 
console.log("============="); 
console.log(timestamp); 

function getMicroseconds(timestamp) {
    let parts = timestamp.split(':');
    let seconds = parseFloat(parts[2]); // includes milliseconds
    return seconds * 1000; // convert to microseconds
}

console.log(timestamp.split(':'))