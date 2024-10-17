import { Clerk } from "@clerk/clerk-js";
import { fetchCurrency } from './currency.js';
import { updateCurrencyDisplay } from "./currencyDisplay.js";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const clerk = new Clerk(clerkPubKey);

window.clerk = clerk;

async function initClerk() {
    await clerk.load();
    const userButtonDiv = document.getElementById("user-button");
    if (userButtonDiv) {
        clerk.mountUserButton(userButtonDiv);
    }

    if (clerk.user) {
        const userId = clerk.user.id;
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
    }
}

initClerk().catch(error => {
    console.error("Failed to initialize Clerk:", error);
});