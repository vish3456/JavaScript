const user = {
    name: "vishnu",
    price: 900,
    welcomeMessage: function() {
        console.log(`Welcome ${this.name} to the course priced at ${this.price}`);
        // console.log(this);
    }
}
// user.welcomeMessage();
// user.name = "rahul";
// user.welcomeMessage(); 
// console.log(this) 
// const greet = function(){
//     console.log(this);
// }
// greet();
//arrow function
// const greet = () => {
//     console.log(this);
// }
// greet();
const addtwonumber = (num1,num2) => num1 + num2
console.log(addtwonumber(5,10));