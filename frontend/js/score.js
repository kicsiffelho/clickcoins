async function storeScore(score) {
    const user = clerk.user;
    if (user) {
        const userId = user.id;
        const username = user.username;
        const response = await fetch('/api/store-score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userId, score, username})
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Score stored:', data);
        }
        else {
            const errorData = await response.text();
            console.error('Error storing score:', response.status, errorData);
        }
    }
    else {
        console.error('User not logged in');
    }
}

async function getScores() {
    const response = await fetch('/api/scores');
    const scores = await response.json();
    const scoresList = document.getElementById('scores-list');
    scoresList.innerHTML = '';  
    scores.forEach((score, index) => {
        const row = document.createElement('tr');
        const indexCell = document.createElement('td');
        indexCell.textContent = index + 1;
        row.appendChild(indexCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = score.username;
        row.appendChild(nameCell);

        const scoreCell = document.createElement('td');
        scoreCell.textContent = score.score;
        row.appendChild(scoreCell);

        scoresList.appendChild(row);
    });

    if (response.ok) {  
        console.log('Scores retrieved:', scores);
    }
    else {
        const errorData = await response.text();
        console.error('Error getting scores:', response.status, errorData);
    }
}

async function displayHighScore(userId) {
    const response = await fetch(`/api/highscore/${userId}`);
    const score = await response.json();

    console.log('High score:', score);
    const highscoreDiv = document.getElementById('user-highscore');
    highscoreDiv.innerHTML = '';
    highscoreDiv.innerHTML = `<h5>Your highscore: ${score || 0}</h5>`;
}

document.addEventListener('DOMContentLoaded', async() => {
    await getScores();
    console.log('Clerk user id:', clerk.user);
    const userId = clerk.user.id;
    displayHighScore(userId);
    
    console.log('Highscore div:', document.getElementById('user-highscore').children);
});

export { storeScore, getScores, displayHighScore };