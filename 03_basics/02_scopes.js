//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);  // no error
    }
    // console.log(website); //error
}

// console.log(username); // error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // before declartion we can access

function addone(num){
    return num + 1
}



addTwo(5)  // before decalaration we cannot access the function if we declare func like this
const addTwo = function(num){
    return num + 2
}
//console.log(addTwo(5));