// A promise: at least one callback, available: callbacks for OK and Error
const request = fetch('')
    .then((data) => {  // Callback for successful

    })  
    .catch((error) => {  // Callback for error

    });