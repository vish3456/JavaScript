

if(true){
    let a = 10
    const b  = 20
    var c = 30
}
// console.log(a) //error cause block scope
// console.log(b) //error cause block scope
// console.log(c) //30 cause function scope
// levelling 
function one(){
    const user = "vishnu"
    function two(){
        const web = "yt"
        console.log(user); //vishnu
    }
    //console.log(web); //error cause web is not defined in this scope
    two();
}
one();
//------------------interesting part------------------
// in javascript variables are powerful they can hold anything in them

function addone(num){
    return num +1;
}
addone(5); //6
const addtwo = function(num){
    return num+2;
}
addtwo(5); //7