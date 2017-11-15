const array = [10, 20, 30, 40, 50];

const callback = (n) => console.log('Number: ', n);

console.log('Starting...');
array.forEach(callback);
console.log('Ending...');