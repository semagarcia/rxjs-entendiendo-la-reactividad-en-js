// Import base structure (standardized)
const watcher = require('./notifier');

// Callbacks
const dataCb = (data) => console.log('Data -> ', data);
const errorCb = (error) => console.log('Error! ', error);
const endCb = () => console.log('End!');

// Watcher instantiation
const w = watcher(dataCb, errorCb, endCb);

function doSomethingWithNumbers(aWatcher) {
    [10, 20, 30, 40, 50].forEach(aWatcher.onData);
    aWatcher.onEnd();
}

// Execute
doSomethingWithNumbers(w);