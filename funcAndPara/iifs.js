// normal function
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai();
// ( function chai(){
//     console.log(`DB CONNECTED`);
// }())
// we use iife to immediately invoke the function without calling it again and again and to avoid polluting global space.
( (name)=>{
    console.log(`DB CONNECTED ${name}`);
})("vishnu");