// New watcher structure instantiation
const observer = {
    onData: (data) => console.log('Data -> ', data),
    onError: (error) => console.log('Error! ', error),
    onEnd: () => console.log('End!')
};

const observable = {
    subscribe: function subscribe(obs) {
        [1, 2, 3, 4, 5].forEach(obs.onData);
        obs.onEnd();
    }
};

// Execute
observable.subscribe(observer);