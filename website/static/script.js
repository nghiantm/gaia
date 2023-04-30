const question = [
    {
        question: "<span style='color: rgb(235 235 237);'>Which country has the highest carbon footprint per capita?",
        answers: [
            { text: "United States", correct: false},
            { text: "China", correct: false},
            { text: "India", correct: false},
            { text: "Saudi Arabia", correct: true},
        ]
    },
    {
        question: "<span style='color: rgb(235 235 237);'>What is the main driver of melting Arctic sea ice?",
        answers: [
            { text: "Natural cycles", correct: false},
            { text: "Greenhouse gas emissions", correct: true},
            { text: "Deforestation", correct: false},
            { text: "Industrial pollution", correct: false},
        ]
    },
    {
        question: "<span style='color: rgb(235 235 237);'>What is the name of the process by which carbon is removed from the atmosphere and stored in the ground?",
        answers: [
            { text: "Carbon sequestration", correct: true},
            { text: "Carbon capture", correct: false},
            { text: "Carbon reduction", correct: false},
            { text: "Carbon offsetting", correct: false},
        ]
    },
    {
        question: "<span style='color: rgb(235 235 237);'>What is the name of the phenomenon by which the warming of the Arctic causes changes in the jet stream that can lead to extreme weather events?",
        answers: [
            { text: "Polar vortex disruption", correct: false},
            { text: "Jet stream oscillation", correct: false},
            { text: "Arctic amplification", correct: true},
            { text: "Troposphere destabilization", correct: false},
        ]
    },
    {
        question: "<span style='color: rgb(235 235 237);'>How many times can we recycle a cardboard box?",
        answers: [
            { text: "7 times", correct: true},
            { text: "2 times", correct: false},
            { text: "10 times", correct: false},
            { text: "5 times", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = currentQuestion.
    question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    }); 
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.ariaDisabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `<span style='color: rgb(235 235 237);'>You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();