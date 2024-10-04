import { Clerk } from "@clerk/clerk-js";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

async function initClerk() {
    const clerk = new Clerk(clerkPubKey);

    await clerk.load();

    if (clerk.user) {
        document.getElementById("singin").innerHTML = `
            <div id="user-button"></div>
        `;

        const userButtonDiv = document.getElementById("user-button");
        clerk.mountUserButton(userButtonDiv);
    } else {
        document.getElementById("app").innerHTML = `
            <div id="sign-in"></div>
        `;

        const signInDiv = document.getElementById("sign-in");
        clerk.mountSignIn(signInDiv);
    }
}

initClerk().catch(error => {
    console.error("Failed to initialize Clerk:", error);
});