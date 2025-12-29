// for loop
// for(let i=0; i<=10;i++){
//     console.log(`loop iterates ${i} times`);
// }console.log("Loop ended");

// while loop
// let count = 0;
// while(count < 5){
//     console.log(`while loop count: ${count}`);
//     count++;
// }console.log("While loop ended");
// for(let i=0;i<=10;i++){
//     for(let j=0;j<=10;j++){
//         console.log(`the value of inner loop is ${j} and outer loop value is ${i}`);
//     }console.log("Inner loop ended");
// }console.log("Outer loop ended");
// iterating over an array
// let fruits = ['apple', 'banana', 'mango', 'grapes'];
// for(let i=0;i<fruits.length;i++){
//     console.log(`Fruit at index ${i} is ${fruits[i]}`);
// }
// // for..of loop
// for(const fruit of fruits){
//     console.log(`Fruit name is ${fruit}`);
// }
// // for..in loop
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// for(const key in person){
//     console.log(`${key} : ${person[key]}`);
// }
// // break and continue
// for(let i=0;i<=10;i++){
//     if(i===5){
//         console.log("Breaking the loop at i=5");
//         break;
//     }
//     console.log(`Current value of i: ${i}`);
// }
// for(let i=0;i<=10;i++){
//     if(i%2===0){
//         console.log(`Skipping even number: ${i}`);
//         continue;
//     }
//     console.log(`Current odd number: ${i}`);
// }   
// maps
const map = new Map(); // map is an object that holds key-value pairs in the original insertion order.it holds unique keys
map.set('in','india')
map.set('us','usa')
map.set('en','england')
map.set('fr','france')
// console.log(map);
for(const [key,value] of map){
    // console.log(key,'-:',value)
}
const myObj = {
    game1: 'chess',
    game2: 'bgmi',
    game3: 'hogwart legacy',
    game4: 'valorant'
}
for(const key in myObj){
    // console.log(key,'-:',myObj[key])
}
// for each loop for the arrays
const myArr = ['item1','item2','item3','item4','item5']
myArr.forEach(function(item){
    // console.log(item)
})
// using arrow function
myArr.forEach( (item)=>{
    //  console.log(item)
})
const codinglang = [
    {
        languageName: 'javascript',
        languageFilename:'js'
    },
    {
        languageName: 'python',
        languageFilename:'py'
    },
    {
        languageName: 'java',
        languageFilename:'java'
    },
    {
        languageName: 'c++',
        languageFilename:'cpp'
    }
    
]
codinglang.forEach( (item) =>{
    console.log(item.languageName,'-:',item.languageFilename)
})
