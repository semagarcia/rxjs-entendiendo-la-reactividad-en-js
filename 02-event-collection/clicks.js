const bodyElement = document.querySelector('body');

function callback($event) {
    console.log('Clicked!', $event);
}

bodyElement.addEventListener('click', callback);