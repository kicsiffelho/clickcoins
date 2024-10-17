import { Clerk } from "@clerk/clerk-js";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const clerk = new Clerk(clerkPubKey);

async function initClerk() {
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