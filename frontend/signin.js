import { Clerk } from "@clerk/clerk-js";

const clerkPubKey = 'pk_test_Y29oZXJlbnQtcGVnYXN1cy04MS5jbGVyay5hY2NvdW50cy5kZXYk';

async function initClerk() {
    const clerk = new Clerk(clerkPubKey);
    await clerk.load();

    if (clerk.user) {
        window.location.href = './welcome.html';
    } else {
        document.getElementById("app").innerHTML = `<div id="sign-in"></div>`;
        const signInDiv = document.getElementById("sign-in");
        clerk.mountSignIn(signInDiv);
    }

    const userButtonDiv = document.createElement('div');
    document.getElementById("app").appendChild(userButtonDiv);
    clerk.mountUserButton(userButtonDiv);
}

document.addEventListener('DOMContentLoaded', () => {
    initClerk().catch(error => {
        console.error("Failed to initialize Clerk:", error);
    });
});