document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('error-message');

    errorMessage.innerHTML = '';

    if (username === '' || password === '') {

        errorMessage.innerHTML = 'Username and Password are required!';
        errorMessage.style.color = 'red';
    } else {
        alert('Login successful!');  
        document.getElementById('loginForm').submit(); 
    }
});