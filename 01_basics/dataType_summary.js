
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

