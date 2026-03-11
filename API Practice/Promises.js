//This creates the promise which takes in two parameters, resolve and reject. We create this using an arrow function
let p = new Promise((resolve, reject) =>{

    //doing this using a simple comparison analogy
    let a = 1 + 1
    if (a == 2){
        resolve("Success")
        // if this is true we accept (resolve)

    } else{
        reject("Failed")
        // else we reject it

    }
})