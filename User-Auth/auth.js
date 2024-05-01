// Toggle between sign-up and login forms
document.getElementById("toggle-login").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("sign-up-container").classList.remove("show");
    document.getElementById("login-container").classList.add("hide");
});

document.getElementById("toggle-signup").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("login-container").classList.remove("show");
    document.getElementById("sign-up-container").classList.add("hide");
});

// Handle Google sign-up
document.getElementById("google-signup-btn").addEventListener("click", function(event) {
    signUpWithGoogle();
});

function signUpWithGoogle() {
    // Add your Google sign-up logic here
    // For example, trigger Google Sign-In functionality
}
