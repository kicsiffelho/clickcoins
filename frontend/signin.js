import { Clerk } from "@clerk/clerk-js";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

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
