const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    // Use HTML constraint API to check form validity
    isValid = form.checkValidity();
    // If the form isn't valid
    if (!isValid) {
        // Style main message for an error
        message.textContent = '*** Please fill out all fields ***';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see if both password fields match
    if (password1El.value === password2El.value) {
        // If they match
        passwordsMatch = true;
        
    } else {
        // If they don't match
        passwordsMatch = false;
        return;
    }
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    // Submit Form if Valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}


// Event Listener
form.addEventListener('submit', processFormData);