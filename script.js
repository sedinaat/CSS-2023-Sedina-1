//Quiz questions
const questions = [
  {
    question: "What does CSS stand for?",
    a: "Coding Summer/Spring School",
    b: "Coding Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs & Sailboats",
	c: "Something else",
    correct: "a",
  },
  {
    question: "When was Coding Summer/Spring School founded?",
    a: "2018",
    b: "2021",
    c: "2022",
    d: "2023",
	e: "2007",
    correct: "b",
  },
  {
    question: "Which organisation did the Coding Summer/Spring School initially start in?",
    a: "Bosnia and Herzegovina Famous Foundation",
    b: "Bosnia and Herzegovina Futures Foundation",
    c: "Bosnia and Herzegovina Factory Foundation",
    d: "none of the above",
	e:"Bosnia and Herzegovina Funny Foundation",
    correct: "b",
  },
];

//Fetching the HTML elements
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

//Counters
let currentQuiz = 0;
let score = 0;

//Function that deselects all answers
const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

//Function that deselects all answers
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

//Function that loads the quiz (deselects the answers, sets the initial questions and it's possible answers)
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = questions[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

//Loading the quiz
loadQuiz();

//Trigger that checks the validity of the answer
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === questions[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < questions.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${questions.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});
