// JavaScript implementation for "sync-way.ts" example, adapted to be executed
// directly in the browser and simulating a network delay
let PersonSync = {
    setName: (name) => {
        console.log('%c[CodeMotion] Setting name...', 'background:#034173; color:white');
        setTimeout(() => {
            console.log('%c[CodeMotion] Name successfully set!', 'background:#090; color:white');
        }, 2000);
    },

    setUsername: (surname) => {
        console.log('%c[CodeMotion] Setting surname...', 'background:#034173; color:white');
        setTimeout(() => {
            console.log('%c[CodeMotion] surname successfully set!', 'background:#090; color:white');
        }, 3000);
    },

    setAge: (age) => {
        console.log('%c[CodeMotion] Setting age...', 'background:#034173; color:white');
        setTimeout(() => {
            console.log('%c[CodeMotion] age successfully set!', 'background:#090; color:white');
        }, 1000);
    }
};