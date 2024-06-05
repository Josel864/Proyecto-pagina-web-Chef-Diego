function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const validUsername = 'admin';
    const validPassword = '1234';

    if (username === validUsername && password === validPassword) {

        window.location.href = 'menuprincipal.html';
        return false;
    } else {

        errorMessage.textContent = 'Usuario o contraseña incorrectos';
        return false;
    }
}
