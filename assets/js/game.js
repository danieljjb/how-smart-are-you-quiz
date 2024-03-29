/* jshint esversion: 6 */

// I used this tutorial to give me a point of reference for some of the code: 
// https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=2379s&ab_channel=BrianDesign
 


// Query Selectors

const question = document.querySelector('#question');
const answers = Array.from(document.querySelectorAll('.answer'));
const questionCounterText = document.querySelector('#questionCounter');
const scoreText = document.querySelector('#score');

// Variables

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 20;


// I used the following tutorials to help understand how to use fetch:
// https://www.youtube.com/watch?v=jK5zzSA2JHI&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=11&ab_channel=JamesQQuick
// https://www.youtube.com/watch?v=3aKOQn2NPFs&ab_channel=JamesQQuick

// Gets random questions and answers from an online database of general knowledge questions

let questions = [];
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
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
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
    
// Functions

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

//  Checks if there are questions available and counts what question the user is on
getNewQuestion = () => {

    if (availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign("end.html");
    }

    questionCounter++;
    if (questionCounterText) {
        questionCounterText.innerHTML = `${questionCounter}/${MAX_QUESTIONS}`;
    }

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    if (question) {
        question.innerHTML = currentQuestion.question;
    }

    answers.forEach(answer => {
        const number = answer.dataset.number;
        if (answer) {
            answer.innerHTML = currentQuestion['answer' + number];
        }
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

// Checks if answer is correct or incorrect and adds points if correct
answers.forEach(answer => {
    answer.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedAnswer = e.target;
        const selectedCorrectAnswer = selectedAnswer.dataset.number;

        const classToApply =
            selectedCorrectAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        getNewQuestion();
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
    localStorage.setItem('mostRecentScore', score);
};