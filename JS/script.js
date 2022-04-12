const form = document.getElementsByTagName('form')[1];
function validate() {
    var email = document.getElementById("email");
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (email.value.trim() === "") {
        alert("Empty email");
        return false;
    }
    else if (!regexp.test(email.value)) {
        alert("Invalid Email");
        return false;
    }
    else {
        return true;
    }
}
const form2 =document.getElementsByClassName("name");
function validate2() {
    var name = document.getElementById("name");
    var regexp2 = /^([a-zA-Z\.]+)$/;
    if (name.value.trim() === "") {
        alert("Empty name");
        return false;
    }
    else if (!regexp2.test(name.value)) {
        alert("Invalid name");
        return false;
    }
    else {
        return true;
    }
}

//for phone number
const form3 =document.getElementsByClassName("number");
function validate3() {
    var number = document.getElementById("number");
    var regexp3 = /^([0-9\-]{10,13})$/;
    if (number.value.trim() === "") {
        alert("Empty number");
        return false;
    }
    else if (!regexp3.test(number.value)) {
        alert("Invalid number");
        return false;
    }
    else {
        return true;
    }
}

// phone number ends
// for password
// for password

const form4 = document.getElementsByClassName('password');
function validate4() {
    var password = document.getElementById("password");
    var regexp4 = /^([a-zA-Z0-9\.-?]+)$/;
    if (email.value.trim() === "") {
        alert("Empty password");
        return false;
    }
    else if (!regexp4.test(password.value)) {
        alert("Invalid Password");
        return false;
    }
    else {
        return true;
    }
}

form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit
    if (!validate()) {
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
    else if(!validate2()){
        event.preventDefault();
    }
    else if(!validate3()){
        event.preventDefault();
    }
    else if (!validate4()){
        event.preventDefault();
    }
});



