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

//we handle the results from the promise using .then and .catch. These takes in message parameter which we can use to show the results from the promise
p.then((message) =>{
    console.log("This is in the then " + message)
}).catch((message) =>{
    console.log("This is in the catch " + message)
})


// Another Example of promise
const userLeft = false
const userWatchingCatMeme = false

// we create a function that returns a promise.
function watchTutorialPromise(){
    return new Promise((resolve, reject) =>{

        //we check if the user is left or watching cat meme, either of these being true is a reject case
        if (userLeft){
            reject({
                name: "User left",
                message:":("
            })
        } else if (userWatchingCatMeme){
            reject({
                name: "User is watching meme",
                message: "WebDevSimplified < Cat"
            })
            // This is a resolve case
        } else {
            resolve("Tutorial completed successfully")
        }

    })
}

// we call back the above promise here
// this always takes in the message paraeter which can be used to show the results of the promise
watchTutorialPromise().then((message) =>{
    console.log("This is in the then " + message)


}). catch((message)=>{
    console.log(message.name + " " + message.message)

})

//Another example assumng we have three simple promises created
const recordVideoOne = newPromise((resolve, reject) =>{
    resolve("Video 1 Recorded")
})

const recordVideoTwo = newPromise((resolve, reject) =>{
    resolve("Video 2 Recorded")
})

const recordVideoThree = newPromise((resolve, reject) =>{
    resolve("Video 3 Recorded")
})



// to call back this function we use the promise.all method to call everthing in parallel manner at once instead of waiting for them to run one after the other.
// promise.all takes all the arrays we want to run
promise.all([recordVideoOne,  recordVideoTwo, recordVideoThree]). then((messages) =>{
    console.log(messages)
    // This wil send an array of all the successful messsages from the promises
})



//Another method that we can use is promise.race, which returns the result of one without waiting for the others
 
