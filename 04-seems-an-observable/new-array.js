// Our lion!
const observable = {
    subscribe: function subscribe(obs) {
        ["GRR", "GRRRRRR", "GRRR"].forEach(obs.onData);
        obs.onEnd();
    }
};

// New watcher structure instantiation
const observer = {
    onData: (data) => console.log('Data -> ', data),
    onError: (error) => console.log('Error! ', error),
    onEnd: () => console.log('End!')
};

// Execute
observable.subscribe(observer);