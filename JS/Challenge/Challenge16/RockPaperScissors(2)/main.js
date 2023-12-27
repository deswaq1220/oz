let img = document.getElementById("img");
let scissors = document.getElementById("scissors");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let score = document.getElementById("score");
let user_score = document.getElementById("user_score");
let computer_score = document.getElementById("computer_score");
let reset_btn = document.getElementById("reset_btn");
let end_btn = document.getElementById("end_btn");

let imgArray = new Array();
imgArray[0] = "paper.png";
imgArray[1] = "rock.png";
imgArray[2] = "scissors.png";

let a;
let userScore = 0;
let computerScore = 0;

function imageTime() {
  a = Math.floor(Math.random() * 3)+1;
  img.src = imgArray[a];
}

setInterval(imageTime, 400);

//가위

scissors.onclick = () => {
  clearInterval();
  if (a === 0) {
    alert("승리");
    userScore++;
    user_score.textContent = userScore;
  } else if (a === 2) {
    alert("비겼습니다.");
  } else {
    alert("패배");
    computerScore++;
    computer_score.textContent = computerScore;
  }
};

//바위
rock.onclick = () => {
  clearInterval();
  if (a === 0) {
    // (컴퓨터 : 보를 낸 경우)
    alert("패배");
    computerScore++;
    computer_score.textContent = computerScore;
  } else if (a === 2) {
    //(컴퓨터 : 가위낸 경우)
    alert("이겼습니다.");
    userScore++;
    user_score.textContent = userScore;
  } //(컴퓨터 : 묵 낸경우)
  else {
    alert("비겼습니다.");
  }
};

paper.onclick = () => {
  clearInterval();
  if (a == 0) {
    // (컴퓨터 : 보를 낸 경우)
    alert("비겼습니다");
  } else if (a == 2) {
    //(컴퓨터 : 가위낸 경우)
    alert("패배.");
    computerScore++;
    computer_score.textContent = computerScore;
  } //(컴퓨터 : 묵 낸경우)
  else {
    alert("이겼습니다.");
    usersSore++;
    user_score.textContent = userScore;
  }
};

reset_btn.onclick = () => {
  let check = confirm('다시 시작하시겠습니까??');
  if(check === true){
    location.reload();
  }
}

end_btn.onclick = () => {
  let check = confirm('게임을 종료하시겠습니까?')
  if(check === true){
    alert(`게임승리: ${userScore} 게임패배: ${computerScore}`)
  }
}
