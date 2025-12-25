let myDate = new Date();
console.log(myDate); //current date and time
console.log(myDate.toString()); //convert date to string
console.log(myDate.toDateString()); //convert date to date string
console.log(myDate.toISOString()); //convert date to ISO string
console.log(myDate.toLocaleDateString('en-US')); //convert date to locale date string
console.log(myDate.getFullYear()); //get full year
console.log(myDate.getMonth() + 1); //get month (0-11) so we add 1 to get 1-12
console.log(myDate.getDate()); //get date (1-31)
console.log(myDate.getDay()); //get day (0-6) 0 is Sunday
console.log(myDate.getHours()); //get hours (0-23)
console.log(myDate.getMinutes()); //get minutes (0-59)
console.log(myDate.getSeconds()); //get seconds (0-59)
//create date object with specific date
let specificDate = new Date('2022-01-01T10:00:00');
console.log(specificDate.toString());
//date methods
specificDate.setFullYear(2023); //set full year
specificDate.setMonth(11); //set month (0-11)
specificDate.setDate(25); //set date (1-31)
specificDate.setHours(15);  
let myTimrStamp = Date.now()    //get current timestamp in milliseconds

console.log(myTimrStamp); //set hours (0-23)
specificDate.setMinutes(30); //set minutes (0-59)
specificDate.setSeconds(45); //set seconds (0-59)
console.log(specificDate.toString());