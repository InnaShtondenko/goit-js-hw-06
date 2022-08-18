"use strict";

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    console.log(formElements);

    const mail = formElements.email.value.trim();
    const password = formElements.password.value.trim();

    if (mail === '' || password === '') {
        alert('All fields must be filled!');
        return;
    }
    
    form.reset();
}

