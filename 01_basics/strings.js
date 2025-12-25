const name = "vishnu";
const age = 20;
console.log(`hello my name is ${name} and my age is ${age}`);
//template string or template literal
//it is used to create string easily by using backtick(``) instead of single quote('') or double quote("")
//we can use ${} to insert variable or expression inside the string
const name1 = new String("vishnu");
console.log(name1);
//string is primitive datatype but when we create string using new keyword it becomes an object
//string methods
const greeting = "   hello world   ";
console.log(greeting.length); //length of string
console.log(greeting.trim()); //remove whitespace from both ends
console.log(greeting.toUpperCase()); //convert to uppercase
console.log(greeting.toLowerCase()); //convert to lowercase
console.log(greeting.indexOf("world")); //index of substring
console.log(greeting.slice(3, 8)); //extract part of string from index 3 to 8
console.log(greeting.replace("world", "there")); //replace substring with another substring
//string are immutable means once we create a string we cannot change it but we can create a new string by using string methods 
//for example
let str = "hello";
str[0] = "H"; //this will not change the string
console.log(str); //hello
str = str.replace("h", "H"); //this will create a new string
console.log(str); //Hello   