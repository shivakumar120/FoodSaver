// Show registration form
function showRegister() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

// Show login form
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

// Register function
function register() {
    const name = document.getElementById('reg-name').value;
    const phone = document.getElementById('reg-phone').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    // Add AJAX or Fetch API call to send data to the server
    console.log("Registering:", { name, phone, email, password });
    // Here you would send the data to your database
}

// Login function
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Add AJAX or Fetch API call to verify user credentials
    console.log("Logging in:", { username, password });
    // Here you would check the credentials against your database
}
