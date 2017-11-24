// Our lion!
const observable = {
    subscribe: function subscribe(obs) {
        ["GRR", "GRRRRRR", "GRRR"].forEach(obs.onData);
        obs.onEnd();
    }
};

// New watcher structure instantiation
const observer1 = {
    onData: (data) => console.log(`[OBS1] Ohhh! Lion has said: ${data}`),
    onError: (error) => console.log('Error! ', error),
    onEnd: () => console.log('End!')
};

const observer2 = {
    onData: (data) => console.log(`[OBS2] Ohhh! Lion has said: ${data}`),
    onError: (error) => console.log('Error! ', error),
    onEnd: () => console.log('End!')
};

// Execute
Promise.all([
    observable.subscribe(observer1),
    observable.subscribe(observer2)
]);
