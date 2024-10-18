const age = 18 
const accountNumber = BigInt(123456789900987654321n)
const name = 'sumit jangir'
const isPresent = true
let wish;
const accountBalance = null

console.log('age', typeof age)
console.log('accountNumber', typeof accountNumber);
console.log('name', typeof name);
console.log('isPresent', typeof isPresent);
console.log('wish', typeof wish); // undefined
console.log('accountBalance', typeof accountBalance); // object

/*
primitive
number - 2 power 53
big int 
string
boolean -> true/false
undefined 
null => standalone value


object


primitive (call by value) vs non-primitive (call by reference)

primitive -> number, string, boolean, undefined, null, symbol
non-primitive -> object, array, function

javaScript is dynamically typed


Stack Vs Heap 

Stack - All primitive values are stored in stack
Heap - All non-primitive values are stored in heap

*/

let mySalary = 100

let myFriend = mySalary

mySalary = 200

console.log('mySalary', mySalary);
console.log('myFriend', myFriend);

const userOne = {name : 'sumit', age : 18}
const userTwo = userOne

userOne.age = 19

console.log('userOne', userOne);
console.log('userTwo', userTwo);







