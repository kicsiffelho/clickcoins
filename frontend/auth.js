import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import { FunctionCallingMode } from "firebase/vertexai-preview";

const firebaseConfig = {

    apiKey: "AIzaSyBTRy3i5xw49kGh8jaXgRIirPA8zIzCUEQ",

    authDomain: "clickcoins-10a56.firebaseapp.com",

    projectId: "clickcoins-10a56",

    storageBucket: "clickcoins-10a56.appspot.com",

    messagingSenderId: "992958908694",

    appId: "1:992958908694:web:caf0a195d303f430792837",

    measurementId: "G-NZLXM1HWDL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();

function signUp() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Signed Up:", userCredential.user);
        })
        .catch((error) => {
            console.error("Sign up error:", error.message);
        });
}

function signIn() {
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        console.log("Signed In:", userCredential.user);
    })
        .catch((error) => {
        console.error("Sign In Error:", error.message);
    });
}