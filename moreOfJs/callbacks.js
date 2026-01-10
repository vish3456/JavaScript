// // we use callback function to pass an argument into another function

// function cal(a,b,operation){
//     return operation(a,b);
// }
// function result(a,b,operation){
//     return a+b;
// }

// callback hell

 function getData(dataId,getNextData){
  setTimeout( ()=>{
    console.log('data',dataId)
    if(getNextData){
      getNextData();
    }
  } ,2000)
}

getData(1, ()=>{
  getData(2,()=>{
    getData(3, ()=>{
      getData(4, ()=>{
        getData(5, ()=>{
          getData(6);
        })
      })
    })
  });
} )