// ===== QUIZ SECTION =====
const quizData = [
  {
    question: "Which technique involves reviewing information at spaced intervals?",
    options: ["Chunking", "Visualization", "Spaced Repetition", "Mnemonics"],
    answer: "Spaced Repetition"
  },
  {
    question: "What does the term 'chunking' refer to?",
    options: [
      "Breaking information into smaller groups",
      "Using songs to remember facts",
      "Repeating until memorized",
      "Drawing mental pictures"
    ],
    answer: "Breaking information into smaller groups"
  },
  {
    question: "Which activity strengthens long-term memory?",
    options: ["Cramming", "Random recall", "Spaced review", "Highlighting text"],
    answer: "Spaced review"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

if (questionEl) loadQuestion();

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => selectAnswer(btn, q.answer);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(btn, correct) {
  const selected = btn.textContent;
  if (selected === correct) {
    score++;
    btn.style.background = "#4cd137";
  } else {
    btn.style.background = "#e84118";
  }
  Array.from(optionsEl.children).forEach(b => (b.disabled = true));
}

if (nextBtn) {
  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) loadQuestion();
    else showResult();
  };
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  resultEl.innerHTML = `<h3>You scored ${score}/${quizData.length}!</h3>`;
}

// ===== TRACKER SECTION =====
const calendarEl = document.getElementById("calendar");
if (calendarEl) {
  const daysInMonth = 30;
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div");
    day.classList.add("day");
    day.textContent = i;
    day.onclick = () => day.classList.toggle("done");
    calendarEl.appendChild(day);
  }
}
