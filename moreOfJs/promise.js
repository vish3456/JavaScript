// promise is to deal with the callback hell
// promise is for eventual completion of task, it is an object in js
let promise = new Promise( (resolve,reject) =>{
    console.log("this is promise")
    resolve("success")
} )

// promise has 3 state
// 1--> pending- The result is undefined
// 2--> reject- the result is an error
// 3--> fulfilled- the result is a value(fuulfilled)

//generally we do not create the prommise , but we have to deal with the promises , tht has been provided by the other source

// deal with the promises
// 1- promise.then() --  we use it when the promise is fullfilled
promise.then( (res)=>{
    console.log("completed")
} )

// 2. promise.catch() -- we uses it when the prommise having some  error or did not get any value

promise.catch( (err) =>{
    console.log("error occcures")
})

// Promise chain
function asyncFunc1(){
    return new Promise( (resolve,reject) =>{
        setTimeout( ()=>{
            console.log('data1')
            resolve('success')
        } ,4000)
    } )
}
function asyncFunc2(){
    return new Promise( (resolve,reject) =>{
        setTimeout( ()=>{
            console.log('data2')
            resolve('success')
        } ,4000)
    } )
}

function asyncFunc3(){
    return new Promise( (resolve,reject) =>{
        setTimeout( ()=>{
            console.log('data3')
            resolve('success')
        } ,4000)
    } )
}

function asyncFunc4(){
    return new Promise( (resolve,reject) =>{
        setTimeout( ()=>{
            console.log('data4')
            resolve('success')
        } ,4000)
    } )
}

console.log('fetching data1...')



console.log('fetching data2...')

let p2  = asyncFunc2;
p2.then( (res)=>{
    console.log(res)
} )

console.log('fetching data3...')

let p3  = asyncFunc3;
p4.then( (res)=>{
    console.log(res)
} )

console.log('fetching data4...')

let p4  = asyncFunc4;
p4.then( (res)=>{
    console.log(res)
} )

// this will give the data after one another
// promise chain
asyncFunc1()
  .then(res1 => {
    console.log(res1);
    return asyncFunc2();
  })
  .then(res2 => {
    console.log(res2);
    return asyncFunc3();
  })
  .then(res3 => {
    console.log(res3);
    return asyncFunc4();
  })
  .then(res4 => {
    console.log(res4);
  })
  .catch(err => {
    console.error(err);
  });

