function displayWelcomeMsg() {
    const username = clerk.user.username;
    const welcomeMsgDiv = document.getElementById('welcome-msg');
    welcomeMsgDiv.textContent = `<h2 id="welcome-msg">Hi ${username}!</h2>`
}

export { displayWelcomeMsg };