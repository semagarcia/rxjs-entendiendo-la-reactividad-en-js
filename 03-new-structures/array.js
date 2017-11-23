// Import base structure (standardized)
const watcher = require('./notifier');

// Callbacks
const dataCb = (data) => console.log('Data -> ', data);
const errorCb = (error) => console.log('Error! ', error);
const endCb = () => console.log('End!');

// Instantiation
const w = watcher(dataCb, errorCb, endCb);

// Test array
const array = [10, 20, 30, 40, 50];

// Using our structure
console.log('Before...');
array.forEach(w.onData);
w.onEnd();