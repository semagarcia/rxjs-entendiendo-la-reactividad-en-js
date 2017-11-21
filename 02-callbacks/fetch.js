// A promise: at least one callback, available: callbacks for OK and Error
const request = fetch('http://localhost:3000/')
    .then((data) => {  // Callback for successful

    })  
    .catch((error) => {  // Callback for error

    });