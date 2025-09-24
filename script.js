const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const crtAccount = document.querySelector('.create-account');



crtAccount.addEventListener('click', (e) => {
    confirmPassword.setCustomValidity("");

    if (password.value === confirmPassword.value) {
        setCustomValidity("")
        console.log("true");
    } else {
        // e.preventDefault(); 
        confirmPassword.setCustomValidity("Passwords didn't match");
        confirmPassword.reportValidity();
        confirmPassword.value = "";
        confirmPassword.focus();
    }
})



    