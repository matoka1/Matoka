// Sign Up
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Account created! Please log in.");
  window.location.href = "index.html";
});

// Log In
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.username === username && user.password === password) {
    localStorage.setItem("loggedIn", true);
    window.location.href = "content.html";
  } else {
    alert("Invalid credentials. Try again.");
  }
});
