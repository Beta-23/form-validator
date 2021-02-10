const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    // Use HTML constraint API to check form validity
    isValid = form.checkValidity();
    console.log(isValid)
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