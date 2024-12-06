import { get } from "../../backend/routes/scoreRoute";

async function storeScore(score) {
    const user = clerk.user;
    if (user) {
        const userId = user.id;
        const response = await fetch('/api/store-score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userId, score})
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
    scores.forEach(score => {
        const scoreItem = document.createElement('li');
        scoreItem.textContent = `${score.userId}: ${score.score}`;
        scoresList.appendChild(scoreItem);
    }); 

    if (response.ok) {  
        console.log('Scores retrieved:', scores);
    }
    else {
        const errorData = await response.text();
        console.error('Error getting scores:', response.status, errorData);
    }

}
document.addEventListener('DOMContentLoaded', getScores);

export { storeScore, getScores };