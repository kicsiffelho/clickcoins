import { Clerk } from "@clerk/clerk-js";

const clerkPubKey = 'pk_test_Y29oZXJlbnQtcGVnYXN1cy04MS5jbGVyay5hY2NvdW50cy5kZXYk';
const clerk = new Clerk(clerkPubKey);

async function initClerk() {
    await clerk.load();

    const userButtonDiv = document.getElementById("user-button");
    if (userButtonDiv) {
        clerk.mountUserButton(userButtonDiv);
    }
}

initClerk().catch(error => {
    console.error("Failed to initialize Clerk:", error);
});