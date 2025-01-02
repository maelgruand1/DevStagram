document.addEventListener("DOMContentLoaded", () => {
    const loginSection = document.getElementById("login-section");
    const signupSection = document.getElementById("signup-section");

    const switchToSignup = document.getElementById("switch-to-signup");
    const switchToLogin = document.getElementById("switch-to-login");

    // Afficher l'inscription
    switchToSignup.addEventListener("click", () => {
        loginSection.classList.add("hidden");
        signupSection.classList.remove("hidden");
    });

    // Afficher la connexion
    switchToLogin.addEventListener("click", () => {
        signupSection.classList.add("hidden");
        loginSection.classList.remove("hidden");
    });
});
