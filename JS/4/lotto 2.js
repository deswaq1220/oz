const todaySpan = document.querySelector("#today")
const numbersDiv = document.querySelector(".numbers")
const drawBtn = document.querySelector("#draw")
const resetBtn = document.querySelector("#reset")

let lottoNum = []
const colors = ['orange', 'skyblue', 'red', 'purple', 'green']

const today = new Date()
let year = today.getFullYear()
let month = today.getMonth() +1
let date = today.getDate()
todaySpan.textContent =`${year}년 ${month}월 ${date}일`

function paintNumber(number){
  const eachNumDiv = document.createElement("div")
  eachNumDiv.classList.add("eachnum")
  let colorIndex = Math.floor(number / 10)
  eachNumDiv.style.backgroundColor = colors[colorIndex]
  eachNumDiv.textContent = number
  numbersDiv.append(eachNumDiv)
}

drawBtn.addEventListener("click",function(){
  lottoNum = [];
  numbersDiv.innerHTML = ""
  while(lottoNum.length < 6){
    let rn = Math.floor(Math.random()*45)+1
    if(lottoNum.indexOf(rn) === -1){
      lottoNum.push(rn)
      paintNumber(rn)
    } 
  }
  
})

resetBtn.addEventListener('click', function(){
  lottoNum.splice(0, 6)
  numbersDiv.innerHTML = ""
})