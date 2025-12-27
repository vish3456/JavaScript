 //rest operator
 function nums(val1,val2,...args){
    return args;

 }
//  console.log(nums(1,2,3,4,5));
// handle objects
    const person = {
        name:"vishnu",
        age:20,
        city:"mathura",
    }
    function handleObject(ObjectName){
        console.log(`My name is ${ObjectName.name} and my age is ${ObjectName.age} i live is ${ObjectName.city}`);

    }
    // handleObject(person);
    // handleObject({name:"rahul",age:22,city:"delhi"});
    const arr = [1,2,3,4,5]
    function getElement(array){
        return array[1];
    }
    console.log(getElement(arr));