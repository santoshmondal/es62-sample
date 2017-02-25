/**
 * Created by santosh on 2/25/17.
 */
let person = {
    "first" : "Hello",
    "last"  : "World",
    "email" : "abcd@email.com",
    "mobile": "+919323791976"
};


const {first, last} = person;

console.log(person);


// null, undefined, false
const { dogName = 'snickers' } = { dogName: undefined }
console.log(dogName) // what will it be? 'snickers'!

const { dogName1 = 'snickers' } = { dogName: null }
console.log(dogName1) // what will it be? null!

const { dogName2 = 'snickers' } = { dogName: false }
console.log(dogName2) // what will it be? false!

const { dogName3 = 'snickers' } = { dogName: 0 }
console.log(dogName3) // what will it be? 0!



let arr1 = [12, 21, 32, 34, 52];
let [a, b] = arr1;
console.log(a);

