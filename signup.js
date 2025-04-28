// signup.js

// Handle sign up form submission
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const newUsername = document.getElementById("new-username").value.trim();
    const newPassword = document.getElementById("new-password").value.trim();
  
    if (newUsername && newPassword) {
      // Save the new credentials to localStorage
      localStorage.setItem('rangerUsername', newUsername);
      localStorage.setItem('rangerPassword', newPassword);
  
      alert('Signup successful! You can now log in.');
      window.location.href = 'login.html'; // Redirect to login page
    } else {
      document.getElementById("signup-error-msg").textContent = "Please fill in all fields.";
    }
  });
  
  // Toggle password visibility
  document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('new-password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈'; // Change the icon based on visibility
  });
  