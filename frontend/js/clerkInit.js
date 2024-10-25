import { Clerk } from "@clerk/clerk-js";
import { fetchCurrency } from './currency.js';
import { updateCurrencyDisplay } from "./currencyDisplay.js";
import { postBackgroundColor, fetchBackgroundColor } from './background.js';
import { shadesOfPurple } from '@clerk/themes';

const clerkPubKey = 'pk_test_Y29oZXJlbnQtcGVnYXN1cy04MS5jbGVyay5hY2NvdW50cy5kZXYk';
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
        window.userId = userId;
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
