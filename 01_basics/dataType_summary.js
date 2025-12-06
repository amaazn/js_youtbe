//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// memory

// stack(primitive),heap(non-primitive)

let myYoutubename="amaanahmed.prep"

let anothername=myYoutubename // iska copy gya hai pass by value
anothername="chaiaurcode"
console.log(myYoutubename);
console.log(anothername);


let userone={  
    email:"amaan@gmail.com",
    upi:"user@yblk"
}

let userTwo=userone  // pass by reference
userTwo.email="amaanahaha@gmailcom"

console.log(userone.email);
console.log(userTwo.email);

