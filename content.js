// Check if the user is logged in
if (!localStorage.getItem('loggedIn')) {
    // If not logged in, redirect to the login page
    window.location.href = 'login.html';
}

// Add logout functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Clear the logged-in session and redirect to the login page
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html'; // Redirect to login after logout
});
