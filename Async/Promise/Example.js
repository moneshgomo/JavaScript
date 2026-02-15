// function callRemoteService() {
//     const start = Date.now();
//     while (Date.now() - start < 3000) {
//         // Blocking loop for 3 seconds (DO NOT use in real apps)
//     }
//     return "Data received";
// }

// console.log("Start");

// const result = callRemoteService();

// console.log("Result:", result);
// console.log("End");



function callRemoteService() {  // CompletableFuture in java 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 3000);
    });
}

console.log("Start");

const promise = callRemoteService();

promise.then(result => {
    console.log("Result:", result);
});

console.log("End");


/*
| Java              | JavaScript      |
| ----------------- | --------------- |
| CompletableFuture | Promise         |
| supplyAsync()     | new Promise()   |
| thenAccept()      | then()          |
| Thread pool       | Event loop      |
| Multi-threaded    | Single-threaded |


*/