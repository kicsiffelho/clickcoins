import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase-config';

const auth = getAuth(app);

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log('User sign up:', user);
    })

    .catch((error) => {
        console.error('Sign up error:', error.code, error.message);
    });
});