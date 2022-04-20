'use strict';

// change button with class of 'color-changer' to red once clicked
let btn = document.querySelector('button');
btn.addEventListener('click', () => btn.style.backgroundColor = 'red')

//When someone submits the form, prevent its default behavior (it should not redirect to a new page). 
//Instead, validate the input in the text input with ID “number-input”. 
//If it is not a number or greater than or equal to 10, change the text of the element with ID “formFeedback” 
//to say ‘Please enter a smaller number’. 
//Otherwise, change the text of that element to say “You are good to go!.”


//Please enter a number smaller than 10:



function validateNumber(evt) {
    evt.preventDefault();
  
    const numberInput = document.querySelector('#number-input');
    const userNum = Number(numberInput.value); // typecast to num
  
    const formFeedback = document.querySelector('#formFeedback');
    if (isNaN(userNum) || userNum >= 10) {
      formFeedback.innerText = 'Please enter a smaller number';
    } else {
      formFeedback.innerText = 'You are good to go!';
    }
}

document.querySelector('.number-form').addEventListener('submit', validateNumber);
