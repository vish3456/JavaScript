// if(2==="2"){
//     console.log("True");
// }else{
//     console.log("False");
// }
const score = 200
if(score > 100){
    const power = "fly"
    console.log(`power : ${power}`)
}
// null coalescing operator
let user;
user = user ?? "Guest User"
user = null ?? "Another User"
console.log(user);
// ternary operator
let age = 17;
let canDrive = age >= 18 ? "can drive" : "cannot drive"
console.log(canDrive);
//more examples
age = 22;
canDrive = age >= 18 ? "can drive" : "cannot drive"
console.log(canDrive);