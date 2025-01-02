// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCu9EmzECDjAtvy7Xrgre-_JfpU-YoCmFY",
    authDomain: "reseausocial-2025.firebaseapp.com",
    projectId: "reseausocial-2025",
    storageBucket: "reseausocial-2025.appspot.com",
    messagingSenderId: "418687081310",
    appId: "1:418687081310:web:53e733da1caf1e50c7cdcf"
  };
  
  // Initialisation de Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Utilisateur inscrit
            alert("Inscription réussie !");
            console.log("Utilisateur inscrit :", userCredential.user);
        })
        .catch((error) => {
            console.error("Erreur :", error.message);
            alert(`Erreur : ${error.message}`);
        });
});
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Connexion réussie
            alert("Connexion réussie !");
            console.log("Utilisateur connecté :", userCredential.user);
        })
        .catch((error) => {
            console.error("Erreur :", error.message);
            alert(`Erreur : ${error.message}`);
        });
});
