const question = [
    {
        question: "Trees may help reduce the effects of global warming by which of these?",
        answers: [
            { text: "reducing carbon dioxide concentrations in the atmosphere", correct: true},
            { text: "losing their leaves in winter", correct: false},
            { text: "increasing oxygen concentration in the atmosphere", correct: false},
            { text: "providing shade from UV rays", correct: false},
        ]
    },
    {
        question: "What two main substances do trees absorb from the atmosphere?",
        answers: [
            { text: "trees absorb carbon dioxide and water", correct: true},
            { text: "trees only need sunlight", correct: false},
            { text: "trees absorb oxygen and water", correct: false},
            { text: "trees absorb nutrients and water from the soil", correct: false},
        ]
    }
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
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);

    }); 
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();