let prevValue = 0;
let isOperatorActive = false;

function handleClickNumber(value: number) {
  const displayEl = document.getElementById("display") as HTMLElement;
  if (isOperatorActive) {
    displayEl.innerHTML = String(value);
    isOperatorActive = false;
  } else displayEl.innerHTML += String(value);
  console.log(value);
}

function handleClickPlus() {
  // 현재 입력된 값으 ㄹ어딘가에다가 저장해 두어야 한다
  const displayEl = document.getElementById("display") as HTMLElement;
  prevValue = Number(displayEl.innerText);
  isOperatorActive = true;
}

function handleClickEqual() {
  const displayEl = document.getElementById("display") as HTMLElement;
  const currentValue = Number(displayEl.innerText)

  const result = prevValue + currentValue;
  displayEl.innerText = String(result)
}


interface Calculator {
  prevValue: number;
  isOperatorActive: boolean;
  handleClickNumber: () => void;
  handleClickEqual: () => void;
}

const calculator: Calculator = {
  prevValue: 0,
  isOperatorActive: false;
  handleClickNumber: () => {
    const displayEl = document.getElementById("display") as HTMLElement;
    this.prevValue = Number(displayEl.innerText)
  }
}