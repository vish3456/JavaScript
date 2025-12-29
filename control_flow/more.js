const arr = ['apple', 'banana', 'cherry'];
const values=arr.forEach( (item)=> {
    // console.log(item)
    return item
})
// console.log(values); // undefined because forEach does not return anything
// filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbers.filter( (num) => num%2===0)
// console.log(even); // [2,4,6,8,10]
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1995, edition: 2001 },
  { title: 'Book Two', genre: 'Science', publish: 2003, edition: 2010 },
  { title: 'Book Three', genre: 'History', publish: 1988, edition: 1994 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 2015, edition: 2019 },
  { title: 'Book Five', genre: 'Fantasy', publish: 2008, edition: 2013 },
  { title: 'Book Six', genre: 'Biography', publish: 1999, edition: 2005 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  { title: 'Book Ten', genre: 'Philosophy', publish: 2020, edition: 2022 }
];
const filteredBooks = books.filter( (book) => book.genre ==='Fiction')
// console.log(filteredBooks);
// MAP
const nums = [1,2,3,4,5];
// const newNums=nums.map( (num) => num+10)
// console.log(newNums) // [11,12,13,14,15]
// chainig map and filter
const newNums = nums.map( (num) => num*10).map( (num) => num+1).filter( (num) => num> 30)
// console.log(newNums); // [31,41,51]
// reduce
const initialValue = 0;
const sum = nums.reduce( (accumulator, currentValue) => {
    // console.log(`accumulator : ${accumulator}, currentValue : ${currentValue}`);
    return accumulator + currentValue, 0
})
// console.log(sum); // 15
const ShoppingCart = [
    { item: 'Laptop', price: 1000, quantity: 1 },
    { item: 'Phone', price: 500, quantity: 2 },
    { item: 'Tablet', price: 300, quantity: 3 },
    { item: 'Headphones', price: 100, quantity: 4 },
    { item: 'Charger', price: 50, quantity: 5 }
];
const total = ShoppingCart.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);

console.log(total); // 2950
