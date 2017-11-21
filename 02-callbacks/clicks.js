const bodyElement = document.querySelector('body');

function callback($event) {
    console.log('Clicked!', $event);
}

// Just a callback
bodyElement.addEventListener('click', callback);