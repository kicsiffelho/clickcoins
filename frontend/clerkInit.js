import { Clerk } from "@clerk/clerk-js";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const clerk = new Clerk(clerkPubKey);

window.clerk = clerk;

async function initClerk() {
    await clerk.load();
    console.log('Clerek initalized:', clerk);
    const userButtonDiv = document.getElementById("user-button");
    if (userButtonDiv) {
        clerk.mountUserButton(userButtonDiv);
    }
}

initClerk().catch(error => {
    console.error("Failed to initialize Clerk:", error);
});
