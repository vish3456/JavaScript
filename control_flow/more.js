const arr = ['apple', 'banana', 'cherry'];
const values=arr.forEach( (item)=> {
    // console.log(item)
    return item
})
// console.log(values); // undefined because forEach does not return anything
// filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbers.filter( (num) => num%2===0)
console.log(even); // [2,4,6,8,10]