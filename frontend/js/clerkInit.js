import { Clerk } from "@clerk/clerk-js";
import { fetchCurrency } from './currency.js';
import { updateCurrencyDisplay } from "./currencyDisplay.js";
import { postBackgroundColor, fetchBackgroundColor } from './background.js';
import { displayHighScore } from "./score.js";
import { displayWelcomeMsg } from "./welcomemsg.js";
import { shadesOfPurple } from '@clerk/themes';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const clerk = new Clerk(clerkPubKey);

window.clerk = clerk;

async function initClerk() {
    await clerk.load();
    const userButtonDiv = document.getElementById("user-button");
    if (userButtonDiv) {
        clerk.mountUserButton(userButtonDiv, {
            appearance: {
                baseTheme: shadesOfPurple,
            },
        });
    }

    if (clerk.user) {
        const userId = clerk.user.id;
        const username = clerk.user.username;
        try {
            const currencyAmount = await fetchCurrency(userId);
            if (currencyAmount !== null) {
                updateCurrencyDisplay(currencyAmount);
            }
            else {
                console.error('Fetched currency amount is null');
            }
        }
        catch (error) {
            console.error('Error fetching currency:', error);
        }
        displayHighScore(userId);
        displayHighScore(username);
    }
}

initClerk().catch(error => {
    console.error("Failed to initialize Clerk:", error);
});
