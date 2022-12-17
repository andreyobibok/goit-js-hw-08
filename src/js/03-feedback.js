const throttle = require('lodash.throttle')
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name = "email"]');
const message = document.querySelector('textarea[name = "message"]');
const submit = document.querySelector('.feedback-form button');

const formState = JSON.parse(localStorage.getItem("feedback-form-state"));

try {
    email.value = formState.email;
    message.value = formState.message;
}
catch (e) {}

const handleInput = function () {
    let data = {
        email: email.value,
        message: message.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(data))
}

const handleSubmit = function (evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.clear();
}

form.addEventListener('input', throttle(handleInput, 500));
submit.addEventListener('click', handleSubmit);