const form = document.querySelector(".contact-form");
const fullName = document.querySelector("#full-name");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#e-mail");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const checkIcon = document.querySelector("#checkin")
const checkIcon2=document.querySelector("#checkin2")

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 5) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkLength(fullName.value, 5) === true) {
        checkIcon.style.display = "inline-block";
    } else {
        checkIcon.style.display = "none";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        checkIcon2.style.display = "inline-block";
    } else {
        checkIcon2.style.display = "none";
    }

    if (checkLength(message.value, 3) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}
form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

