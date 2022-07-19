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
