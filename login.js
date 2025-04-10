document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example of login credentials (you would validate this with a backend in a real app)
    if (username === 'admin' && password === 'password') {
        // Store user session (to simulate login)
        localStorage.setItem('loggedIn', true);

        // Redirect to content page (e.g., dashboard, main page)
        window.location.href = 'content.html'; // Redirect to the content page
    } else {
        alert('Incorrect username or password!');
    }
});
