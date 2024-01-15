// const quizDisplay = document.getElementById("display");
let timerLeft = document.querySelector(".timer-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

// 질문, 답

const quizArray = [
  {
    id: "0",
    question: "질문1",
    option: ["보기1", "보기2", "보기3"],
    correct: "보기2",
  },
  {
    id: "1",
    question: "질문2",
    option: ["보기1", "보기2", "보기3"],
    correct: "보기1",
  },
  {
    id: "2",
    question: "질문3",
    option: ["보기1", "보기2", "보기3"],
    correct: "보기3",
  },
];

const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
  countOfQuestion.innerHTML = (questionCount + 1) + "/" + quizArray.length;
};

// 게임 다시 시작
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//다음버튼
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;
    if (questionCount === quizArray.length) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      userScore.innerHTML =
        "당신의 점수는 " +
        questionCount +
        "개 중 " +
        scoreCount +
        "개 맞추셨습니다!";
    } else {
      countOfQuestion,
        (innerHTML = questionCount + 1 + "of" + quizArray.length + "Question");

      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//타이머
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timerLeft.innerHTML = `${count}s`;
    if (count === 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);
  let questionIndex = 0;
  for (let i of quizArray) {
    i.option.sort(() => Math.random() - 0.5);
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //질문 순서
    questionIndex += 1;
    countOfQuestion.innerHTML = questionIndex + "of" + quizArray.length;
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //문제
    div.innerHTML += `
    <button class="option-div" onClick="checker(this)">${i.option[0]}</button>
    <button class="option-div" onClick="checker(this)">${i.option[1]}</button>
    <button class="option-div" onClick="checker(this)">${i.option[2]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//정답 표시
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //사용자가 정답을 맞췄을 경우
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");

    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  clearInterval(countdown);
  options.forEach((element) => {
    element.disabled = true;
  });
}

function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};


