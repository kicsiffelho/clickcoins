import { Clerk } from "@clerk/clerk-js";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

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
