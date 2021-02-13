let questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
      "Central Processing Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    answers: ["Static", "Private", "Public", "Final"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    answers: ["True", "False"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    answers: ["True", "False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    answers: [".png", ".jpeg", ".gif", ".svg"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow", "Nougat"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    answers: ["120", "160", "100", "140"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    answers: ["True", "False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    answers: ["Python", "C", "Jakarta", "Java"],
  },
];

let startButton = document.querySelector("#start-button");
let nextButton = document.querySelector("#next-button");
let questionContainer = document.querySelector("#question-container");
let questionText = document.querySelector("#question-text");
let answersContainer = document.querySelector("#answers-container");

startButton.addEventListener("click", showQuestion);
nextButton.addEventListener("click", nextQuestion);

score = 0;
questionCounter = 0;

function showQuestion() {
  questionText.innerText = questions[questionCounter].question;
  answersContainer.innerHTML = "";
  // let countDiv = document.createElement("div");
  for (let i = 0; i < questions[questionCounter].answers.length; i++) {
    let questionButton = document.createElement("button");
    questionButton.classList.add("questionButton");
    questionButton.innerText = questions[questionCounter].answers[i];
    answersContainer.appendChild(questionButton);
    questionButton.addEventListener("click", checkAnswer);
  }
  nextButton.classList.remove("hide");
  questionContainer.classList.remove("hide");
  startButton.classList.add("hide");
  let count = 30;
  let interval = setInterval(function () {
    document.getElementById("count").innerHTML = count;
    // document.getElementById("count").innerHTML = "Done";
    if (count === 0) {
      nextQuestion();
    }
    count--;
  }, 1000);
}

function checkAnswer(e) {
  let answerClicked = e.currentTarget.innerText;
  if (answerClicked === questions[questionCounter].correct_answer) {
    score++;
    nextQuestion();
  } else {
    nextQuestion();
  }
}

function nextQuestion() {
  questionCounter++;
  if (questionCounter < questions.length) {
    showQuestion();
  } else {
    document.write(`You got ${score} out of ${questions.length}`);
  }
}
