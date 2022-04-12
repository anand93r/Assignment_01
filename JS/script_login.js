const form = document.getElementsByClassName('test1');
function validate() {
    var email = document.getElementByClass("email");
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



form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit
    if (!validate()) {
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
    else if(!validate2()){
        event.preventDefault();
    }
});