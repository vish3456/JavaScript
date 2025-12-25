//stack and heap
// Stack(Primitiive) Heap(Non-Primitive)
//primitive in stack mean whenever we create a variable we got a new copy of that variable
//non-primitive in heap mean whenever we create a variable we got a reference of that variable
let name = "vishnu"
let name2 = name //new copy of name is created in name2
name2 = "Rajput"//name2 is changed but name is not changed because name2 have a new copy of name
console.log(name) //vishnu
console.log(name2) //Rajput
let person = {
    name: "vishnu"
}
let person2 = person //reference of person is created in person2
person2.name = "Rajput" //person2 is changed and person is also changed because person2 have reference of person
console.log(person.name) //Rajput
console.log(person2.name) //Rajput 
// means in reference the value u changes is the change for both the variables because both the variables point to the same memory location. 