const form=document.getElementsByTagName('form')[0];


function validate(){
    var user1 = document.getElementById('user').value;
    var password1 = document.getElementById('password').value;
    if (user1=='admin'&& password1==1234){
        return true;
    }
    else{
        console.log('error');
    }

    
}
form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit
    if (!validate()) {
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
});