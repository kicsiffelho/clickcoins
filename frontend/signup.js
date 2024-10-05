import { Clerk } from "@clerk/clerk-js";

const clerkPubKey = 'pk_test_Y29oZXJlbnQtcGVnYXN1cy04MS5jbGVyay5hY2NvdW50cy5kZXYk';

async function initClerk() {
    const clerk = new Clerk(clerkPubKey);
    await clerk.load();

    document.getElementById("app").innerHTML = `<div id="sign-up"></div>`;
    const signUpDiv = document.getElementById("sign-up");
    clerk.mountSignUp(signUpDiv);
}

document.addEventListener('DOMContentLoaded', () => {
    initClerk().catch(error => {
        console.error("Failed to initialize Clerk:", error);
    });
});