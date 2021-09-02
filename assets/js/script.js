const pass = document.getElementById('password');
const email = document.getElementById('email');
const form = document.getElementById('form');
let errorPass = document.getElementById('span-pass');
let errorEmail = document.getElementById('span-email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    // get the value from inputs
    const passValue = pass.value.trim();
    const emailValue = email.value.trim();
    if(emailValue === ""){
        errorEmail.innerText = "Empty field, type a email address";
    } else if((emailValue.includes("@") && emailValue.includes(".com")) === false){
        errorEmail.innerText = "Invalid email, type a valid email address";
    } else{
        errorEmail.innerText = "";
    }

    if(passValue.length != 0 && passValue.length  < 8 ){
        errorPass.innerText = "Your password must be at least 8 characters";
    } else if(passValue === ""){
        errorPass.innerText = "Empty field, type a password";
    } else{
        errorPass.innerText = "";
    }
}

