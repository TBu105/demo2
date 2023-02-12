function makeRequest (location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if (location === "Google") {
            resolve("Google says hi")
        }
        else {
            reject("We can only talk to google")
        }
    })
}

function processRequest (response) {
    return new Promise((resolve, reject) => {
        console.log("Processing response")
        resolve(`Extra infomation ${response}`)
    })
}

async function init(location) {
    let result1 = await makeRequest(location)
    console.log("Response Received")    
    let result2 = await processRequest(result1)
    console.log(result2)
}

init("Google")

// makeRequest("Google").then(response => {
//         console.log("Response Received")
//         return processRequest(response)
//     }).then(processRequestResponse => {
//         console.log(`done: ${processRequestResponse}`)
//     }).catch( err => {
//         console.log(`err: ${err}`)
//     })