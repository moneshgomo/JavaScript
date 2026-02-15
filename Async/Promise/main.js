const bookingPromise = new Promise((resolve, reject) => {

    const isBookingSuccessful = false;

    if (isBookingSuccessful) {
        resolve("Booking confirmed");
    } else {
        reject("Booking failed");
    }

});

bookingPromise
    .then(handleSuccess) // resolve
    .catch((message)=> console.log(message + " " +  "Thanks for trying, I will book a bus.")); // reject


function handleSuccess(message) {
    console.log(message);
    console.log("Thanks buddy, I will transfer the amount.");
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise