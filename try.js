const moment = require("moment");

const morning_shift_in = moment('9:30 AM', 'h:mm A').format('H:mm');
const morning_shift_out = moment('6:00 PM', 'h:mm A').format('H:mm');
console.log(morning_shift_in)
console.log(morning_shift_out)


const momentTimeIn = moment("9:00", 'H:mm');
momentTimeIn.add(30, 'minutes');
const momentTimeOut = moment("18", 'H:mm');
console.log(momentTimeIn)
console.log(momentTimeOut)

const timeDurationMilliseconds = momentTimeOut.diff(momentTimeIn);
console.log(timeDurationMilliseconds)
// Calculate hours and minutes
const hours = Math.floor(timeDurationMilliseconds / (60 * 60 * 1000));
const minutes = Math.floor((timeDurationMilliseconds % (60 * 60 * 1000)) / (60 * 1000));
const seconds = Math.floor((timeDurationMilliseconds % (60 * 1000)) / 1000);

// Format the duration as "X hours X minutes"
const formattedDuration = `${hours} hours ${minutes} minutes ${seconds} seconds`;

console.log(formattedDuration);






/*====================================
JAVASCRIPT IS RUN TIME WHICH MEANS WHEN YOU EXECUTE THE CODE THAT IS WHEN YOU WILL ONLY SEE THE Error


OTHER LANGUAGES WHEN YOU RUN THE FILE THE ERROR WILL DISPLAY AUTOMATICALLY
====================================*/





