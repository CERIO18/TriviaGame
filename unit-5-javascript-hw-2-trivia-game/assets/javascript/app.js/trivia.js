function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {}

    function showResults(questions, quizContainer, resultsContainer) {}
    showQuestions(questions, quizContainer);
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}
var questions = [{
        prompt: "What character does Chris Farley play in the movie Tommy Boy?",
        answer: {
            a: 'Tommy Callahan',
            b: 'Michael Rinton',
            c: 'Richard Hayden'
        },
        correctAnswer: 'a'
    },
    {
        prompt: "What is Tommy's step mother's name?",
        answer: {
            a: 'Tina Townsend',
            b: 'Julianna Tomato',
            c: 'Beverly Barish'
        },
        correctAnswer: 'c'
    } {
        prompt: "What City and State did Tommy Boy grow up in the movie?",
        answer: {
            a: 'Sandusky, Ohio',
            b: 'Denver, Colorado',
            c: 'Portland, Oregon'
        },
        correctAnswer: 'a'
    } {
        prompt: "What was likely Tommy's most said line in the movie Tommy Boy?",
        answers: {
            a: 'Richard Hayden',
            b: 'Holy Snikes!',
            c: 'Shut up Richard'
        },
        correctAnswer: 'b'
    }
];
var score = 0

function showQuestions(questions, quizContainer) {
    var output = [];
    var answers;
    for (var i = 0; i < questions.length; i++) {


        function showResults(questions, quizContainer, resultsContainer) {

            var answerContainers = quizContainer.querySelectorAll('.answers');
            var userAnswer = '';
            var numCorrect = 0;

            for (var i = 0; i < questions.length; i++) {
                var response = window.prompt(questions[i].prompt);
                if (response === questions[i].answer) {
                    score++;
                    alert("YOU'RE RIGHT!");
                } else {
                    alert("Nope, are you really a Tommy Boy fan?");
                }
            }
            alert("You got " + score + "/" +
                questions.length);

            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            } else
        }
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');