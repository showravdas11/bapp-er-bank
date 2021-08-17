document.getElementById('login-submit').addEventListener('click', function () {
    // console.log('click');
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    // console.log(userEmail);

    //password
    const passwordFiled = document.getElementById('user-password');
    const userPassword = passwordFiled.value;
    // console.log(userPassword);

    if (userEmail == 'showravdas11@gmail.com' && userPassword == 'das123') {
        window.location.href = 'banking.html'
    }
})

