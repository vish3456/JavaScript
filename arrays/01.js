let arr = [1, 2, 3, 4, 5];
for(let i=0;i<arr.length;i++){}
arr.forEach(x => console.log(x));
//shallow copy
let arr2 = arr;
arr2[0] = 10;
console.log(arr[0]); //10
//deep copy
let arr3 = [...arr];
arr3[1] = 20;
console.log(arr[1]); //2
//array methods
console.log(arr.length); //get length of array
arr.push(6); //add element at the end
console.log(arr);
arr.pop(); //remove element from the end
console.log(arr);
arr.unshift(0); //add element at the beginning
console.log(arr);
arr.shift(); //remove element from the beginning
console.log(arr);
console.log(arr.indexOf(3)); //get index of element
console.log(arr.includes(4)); //check if element is present
console.log(arr.slice(1, 4)); //get subarray from index 1 to 4 (4 not included)
arr.splice(2, 1); //remove 1 element from index 2
console.log(arr);
arr.splice(2, 0, 10); //add element 10 at index 2
console.log(arr);
arr.splice(2, 1, 20); //replace 1 element at index 2 with 20
console.log(arr.join()); //convert array to string   