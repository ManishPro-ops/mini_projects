// DOM Elements
const selectionScreen = document.getElementById('selection-screen');
const loadingScreen = document.getElementById('loading-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const easyBtn = document.getElementById('easy-btn');
const mediumBtn = document.getElementById('medium-btn');
const hardBtn = document.getElementById('hard-btn');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const currentQuestionElement = document.getElementById('current-question');
const scoreElement = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let selectedDifficulty = '';
let selectedAnswer = null;

// Event Listeners
easyBtn.addEventListener('click', () => startQuiz('easy'));
mediumBtn.addEventListener('click', () => startQuiz('medium'));
hardBtn.addEventListener('click', () => startQuiz('hard'));
nextBtn.addEventListener('click', showNextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Start Quiz
async function startQuiz(difficulty) {
    selectedDifficulty = difficulty;
    selectionScreen.classList.add('hidden');
    loadingScreen.classList.remove('hidden');
    
    try {
        questions = await fetchQuestions(difficulty);
        if (questions.length === 0) {
            throw new Error('No questions received from the API');
        }
        
        loadingScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    } catch (error) {
        console.error('Error loading questions:', error);
        loadingScreen.classList.add('hidden');
        selectionScreen.classList.remove('hidden');
        alert('Failed to load questions. Please try again.');
    }
}

// Fetch Questions from Open Trivia DB
async function fetchQuestions(difficulty) {
    const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=18&difficulty=${difficulty}&type=multiple`
    );
    const data = await response.json();
    
    return data.results.map(question => ({
        question: decodeHtmlEntities(question.question),
        options: shuffleArray([
            ...question.incorrect_answers.map(decodeHtmlEntities),
            decodeHtmlEntities(question.correct_answer)
        ]),
        correctAnswer: decodeHtmlEntities(question.correct_answer)
    }));
}

// Display Current Question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectAnswer(option, optionElement));
        optionsElement.appendChild(optionElement);
    });
    
    nextBtn.classList.add('hidden');
    selectedAnswer = null;
}

// Handle Answer Selection
function selectAnswer(answer, element) {
    if (selectedAnswer !== null) return;
    
    selectedAnswer = answer;
    const options = document.querySelectorAll('.option');
    
    options.forEach(opt => {
        opt.classList.remove('selected');
        opt.style.pointerEvents = 'none';
    });
    
    element.classList.add('selected');
    
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
        element.classList.add('correct');
        score++;
    } else {
        element.classList.add('incorrect');
        // Highlight correct answer
        options.forEach(opt => {
            if (opt.textContent === currentQuestion.correctAnswer) {
                opt.classList.add('correct');
            }
        });
    }
    
    nextBtn.classList.remove('hidden');
}

// Show Next Question or Results
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    scoreElement.textContent = score;
}

// Restart Quiz
function restartQuiz() {
    resultsScreen.classList.add('hidden');
    selectionScreen.classList.remove('hidden');
}

// Helper Functions
function decodeHtmlEntities(text) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}