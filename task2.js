document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const answer = document.getElementById('answer1').value;
    
    if (answer === '4') {
        document.getElementById('quiz-response').innerText = 'Correct!';
    } else {
        document.getElementById('quiz-response').innerText = 'Incorrect, try again!';
    }
});

document.getElementById('track-progress').addEventListener('click', function() {
    document.getElementById('progress-message').innerText = 'Your progress has been tracked!';
});
