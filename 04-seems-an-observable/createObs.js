// Creating an observable with a subscribe property
function createObservable(subscribe) {
    return {
        subscribe: subscribe
    };
}

// Our observer 
const observer = {
    onData: (data) => console.log(`Ohhh! Lion has said: ${data}`),
    onError: (error) => console.log('Error! ', error),
    onEnd: () => console.log('End!')
};

const lionObservable = createObservable((obs) => {
    ["GRR", "GRRRRRRRR", "GRRR"].forEach(obs.onData);
    obs.onEnd();
});

lionObservable
    .subscribe(observer);