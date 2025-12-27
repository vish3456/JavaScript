const marvelHerores = ['spiderman','ironman','hulk','thor'];
const dcHeroes = ['batman','superman','flash','aquaman'];
marvelHerores.concat(dcHeroes); //old way to merge two arrays
console.log(marvelHerores);

//merge two arrays
const allHeroes = [...marvelHerores, ...dcHeroes]; //new way to merge two arrays
console.log(allHeroes);

//find max in array
const numbers = [3,5,1,8,2];
const maxNumber = Math.max(...numbers);
console.log(maxNumber);

//spread operator to pass array elements as function arguments
function sum(a, b, c) {
    return a + b + c;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // 6

//copy array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
copiedArray[0] = 10;
console.log(originalArray[0]); // 1
console.log(copiedArray[0]); // 10

//convert string to array
const str = "hello";
const charArray = [...str]; // ['h', 'e', 'l', 'l', 'o']
console.log(charArray);
Array.from(str); // another way to convert string to array

//convert array-like object to array
function arrayLikeToArray() {
    const argsArray = [...arguments];
    console.log(argsArray);
}
arrayLikeToArray(1, 2, 3);

//rest operator to gather function arguments into an array
function multiply(factor, ...numbers) {
    return numbers.map(num => num * factor);
}
console.log(multiply(2, 1, 2, 3, 4)); // [2, 4, 6, 8]    
//flat array
const nestedArray = [1, [2, [3, 4]], 5];
const flatArray = nestedArray.flat(2); // flattening 2 levels or use Infinity
console.log(flatArray); // [1, 2, 3, 4, 5]  
console.log(Array.from({name:"Vishnu", age:20})); // converts array-like object to array
console.log(Array.isArray(marvelHerores)); // checks if variable is an array
console.log(Array.of(1,2,3,4,5)); // creates array from arguments , 
//output: [1,2,3,4,5] 