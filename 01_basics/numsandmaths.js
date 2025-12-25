const score = 400
console.log('Score:', score)
const b = new Number(500)
console.log(b)
//number is primitive datatype but when we create number using new keyword it becomes an object
//number methods
const num = 123.456
console.log(num.toFixed(2)) //convert number to string with 2 decimal places
console.log(num.toPrecision(4)) //convert number to string with 4 significant digits
console.log(Math.round(num)) //round the number
console.log(Math.floor(num)) //round the number down
console.log(Math.ceil(num)) //round the number up
console.log(Math.random()) //generate random number between 0 and 1
console.log(Math.max(1, 2, 3, 4, 5)) //find the maximum number
console.log(Math.min(1, 2, 3, 4, 5)) //find the minimum number
console.log(Math.tolocaleString('en-US', { style: 'currency', currency: 'USD' })) //convert number to currency format
//math object
//math object is used to perform mathematical operations
//-----------------maths----------------------
