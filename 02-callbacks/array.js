const array = [10, 20, 30, 40, 50];

// Just a callback
const callback = (n) => console.log('Number: ', n);

console.log('Starting...\n');
array.forEach(callback);  // Sync callback
console.log('\nEnding...');