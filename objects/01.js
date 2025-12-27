// declare an object
//objeect literals
// adding a symbol
const  mysym = Symbol("key1");
let person = {
    name: "John",
    [mysym]: "value1", //important
    age: 30,
    city: "New York"
};

//accessing object properties
console.log(person.name); // John
console.log(person["age"]); // 30
//updating object properties
person.city = "mathura"
//freeze
Object.freeze(person);
person.age = 35; // will not update
console.log(person.age); // 30
//adding new property
person.country = "USA"; // will not add
console.log(person.country); // undefined
person.greeting = function() {
    console.log("Hello, " + this.name);
}
console.log(person.greeting()); // Hello, John
 