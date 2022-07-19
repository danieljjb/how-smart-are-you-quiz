// Query Selectors

const question = document.querySelector('#question');
const answers = Array.from(document.querySelectorAll('.answer'));
const questionCounterText = document.querySelector('#questionCounter');
const scoreText = document.querySelector('#score');

// Variables

let currentQuestion = {};
let acceptingAnswers = false;
let score = [];
let questionCounter = [];
let availableQuestions = [];
let questions = [];

const CORRECT_POINTS = 10;
const MAX_QUESTIONS = 20;

// Fetch Questions

fetch(
    'https://opentdb.com/api.php?amount=20&category=9&type=multiple'
)
.then((res) => {
    return res.json();
})
.then((loadedQuestions) => {
    questions = loadedQuestions.results.map((loadedQuestion) => {
        const formattedQuestion = {
            question: loadedQuestion.question,
        };

        const answerChoices = [...loadedQuestion.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
        answerChoices.splice(
            formattedQuestion.answer - 1,
            0,
            loadedQuestion.correct_answer
        );

        answerChoices.forEach((choice, index) => {
            formattedQuestion['answer' + (index + 1)] = choice;
        });

        return formattedQuestion;
    });
    startGame();
})
.catch((err) => {
    console.error(err);
});

