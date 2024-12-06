function displayWelcomeMsg() {
    const username = clerk.user.username;
    const welcomeMsgDiv = document.getElementById('welcome-msg');
    welcomeMsgDiv.textContent = `Hi ${username}!`
}

export { displayWelcomeMsg };