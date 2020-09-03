const myGreeting = document.getElementById('current-name');
const myInput = document.getElementById('name-input');
const myButton = document.getElementById('name-button');

// this is how we tell the button to listen for clicks
myButton.addEventListener('click', () => {
    // the cool zone -- the place where stuff happens in response to a click!
    // go grab the current value of the text input
    const userInput = myInput.value;
console.log(userInput)
;

    myGreeting.textContent = userInput;
});