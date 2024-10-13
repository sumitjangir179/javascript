let myName
console.log('myName', myName)
myName = 'sumit'
console.log('myName', myName);

let myDog = 'Rover'
console.log('myDog', myDog);

const accountId = 12
// accountId = 1 // assigment is not allowed
console.log('account', accountId)

var email = 'sumitjangir@gmail.com'
console.log('email', email)

// const number //error const must be intialized
// console.log('number', number)



{
    const friend = 'uday'
    const dob = '17-sept-2000'
    console.log('friend', friend)
    console.log('dob', dob)
    console.log('myname', myName);
    console.log('myDog', myDog);
    console.log('email', email);
    
    
    
}

// console.log('friend', friend) not accessed becaouse have blocked scope
// console.log('dob', dob)  not accessed becaouse have blocked scope

console.table([email, myDog, myName])



/*
What is a variable?
A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence

let and const introduce in es6 and have block scope 

const not allowed to reassignment

let have allowed to reassigment


*/


