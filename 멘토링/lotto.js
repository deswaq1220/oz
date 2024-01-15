function randomNumber(max) {
  let num = Math.floor(Math.random() * max);
  return num;
}

function lottoNumbers() {
  let lottoNum = [];
  for (let i = 1; i <= 6; i++) {
    lottoNum.push(randomNumber(45));
  }
  return lottoNum;
}
console.log(lottoNumbers());

// let arr = [];

// for(let i = 1; i<=6; i++){
//   arr.push(i)
// }
// console.log(arr)

//다음주 (15-19알)까지 일단 풀어놓기
//풀었서용 희희 ✌🏻😁✌🏻

function solution(round) {
  let lotto = [];
  for (let i = 1; i <= round; i++) {
    lotto.push({round:i ,numbers:lottoNumbers()});
  }
  return lotto;
}
console.log(solution(3));

// const person1 ={
//   name: "변경원"
// }

// const person2 ={
//   name: "변경원"
// }

// const arr = [person1,person2]

// const arr = {
//   name: ["변경원", "변경원"],
// };
// console.log(arr);
