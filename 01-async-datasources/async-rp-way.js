// JavaScript implementation for "async-rp-way.ts" example, adapted to be executed
// directly in the browser and simulating a network delay
let PersonAsync = {
    setName: (name, cb) => {
        console.log('%c[CodeMotion] Setting name (async)...', 'background:#034173; color:white');
        setTimeout(() => {
            console.log('%c[CodeMotion] Name successfully set; executing callback', 'background:#090; color:white');
            cb();
        }, 2000);
    },

    setUsername: (surname, cb) => {
        console.log('%c[CodeMotion] Setting surname (async)...', 'background:#034173; color:white');
        setTimeout(() => {
            console.log('%c[CodeMotion] surname successfully set; executing callback', 'background:#090; color:white');
            cb();
        }, 3000);
    },

    setAge: (age, cb) => {
        console.log('%c[CodeMotion] Setting age (async)...', 'background:#034173; color:white');
        setTimeout(() => {
            console.log('%c[CodeMotion] age successfully set; executing callback', 'background:#090; color:white');
            cb();
        }, 1000);
    }
}; 