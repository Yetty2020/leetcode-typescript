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
const recordVideoOne = new Promise((resolve, reject) =>{
    resolve("Video 1 Recorded")
})

const recordVideoTwo = new Promise((resolve, reject) =>{
    resolve("Video 2 Recorded")
})

const recordVideoThree = new Promise((resolve, reject) =>{
    resolve("Video 3 Recorded")
})



// to call back this function we use the promise.all method to call everthing in parallel manner at once instead of waiting for them to run one after the other.
// promise.all takes all the arrays we want to run
Promise.all([recordVideoOne,  recordVideoTwo, recordVideoThree]). then((messages) =>{
    console.log(messages)
    // This wil send an array of all the successful messsages from the promises
})



//Another method that we can use is promise.race, which returns the result of one without waiting for the others
 

//Another Example
//this is a function that takes in the location as a parameter
function makeRequest(location){
    return new Promise((resolve, reject) => {
        //console log that we are making an API request
        console.log(`Making API request to ${location}`)

        if (location === "Googlsse"){
            resolve("Google says hi")
        } else {
            reject("I can only communicate with Google")
        }

    })
}
//another function that adds little information about the request being made
function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log("Processing respoonse")
        // returns only a resolve
        resolve("Extra information" + response)

    })
} 

makeRequest("Google").then((response) =>{
    console.log("This is the then message: "  + response)
    return processRequest(response)

}) .then(processedResponse => {
    console.log(processedResponse)

}). catch((err) =>{
    console.log(err)

})
    




//Async and await solves nesting problems
//instead of using then and catch we simply use aync and await
// the first thing to know is that you need to have some kind of function that youre awaiting the code inside, this is the async function
// then you call different functions inside the aync function with await
//we handle errors in async and await using try and catch

async function doWork(){
    try{
        const response = await makeRequest("Google")
    console.log("Response received")
    const processedResponse = await processRequest(response)
    console.log(processedResponse)

    } catch(err){
        console.log(err)
    }
    
}

doWork()



//learning how to fetch API, we are going to be doing this using a fake api that returns users


fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    headers:{ "Content-type" : "application/json"},
    body: JSON.stringify({name : "user 1"})
}).then(res => {
   return res.json()
}).then(data => console.log(data)).catch(err => {
    console.log(err)
})

async function fetchAPI(){
    try{
        const postResponse = await fetch("https://jsonplaceholder.username.com/posts", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                title: "Learning how to fetch API",
                userId: 1,

            })

        })

        const newPost = await postResponse.json()
        console.log("POST RESULT", + newPost)
    }
    catch(error){
        console.log(error)


    }
}

fetchAPI()



// practice API to generate random dog image
const image = document.getElementById("dog-image")
const btn = document.getElementById("fetch-btn")
btn.addEventListener("click", getDog)


async function getDog() {
    try{
        const dogFetch = await fetch("https://dog.ceo/api/breeds/image/random")
        const postDogData = await dogFetch.json()
        console.log(postDogData)
       
        const src = postDogData.message
        console.log(src)
        image.src = src
    }
    catch(error){console.log("There had been an error encountered")}
}

