import { Clerk } from "@clerk/clerk-js";
import { dark, shadesOfPurple } from '@clerk/themes';

const clerkPubKey = 'pk_test_Y29oZXJlbnQtcGVnYXN1cy04MS5jbGVyay5hY2NvdW50cy5kZXYk';
const clerk = new Clerk(clerkPubKey);

async function initClerk() {
    await clerk.load();

    if (clerk.user) {
        window.location.href = './welcome.html';
    } else {
        document.getElementById("app").innerHTML = `<div id="sign-in"></div>`;
        const signInDiv = document.getElementById("sign-in");
        clerk.mountSignIn(signInDiv, {
            appearance: {
                baseTheme: shadesOfPurple
            }
        });
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
