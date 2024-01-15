//문자열

const a:String = ''
const b:String = ""
const c:string =``

let myName: String = "steve";
let message: String = `Hello, ${myName}`

//숫자 타입 소숫점이 포함된 실수도 포함한다 (number)

let n: number = 100;
n = "100"
n.toUpperCase();

let count:number = 10;
let price: number = 9.99
let temperature: number = 15;
let distance: number = 3.4e-5;

let total: number = count & price;
let average: number = total /2;

let infinity:number = Infinity;
let minusInfinity:number = -Infinity;
let iAmNotANumber: number = NaN;

//boolean

let isOpen: boolean = true;
let isCompleted: boolean = false;

if(isOpen) {
  console.log("hello we are open")
}

if(!isCompleted){
  console.log("job not complete")
}

// && || !
let isAvailable : boolean = isOpen && !isCompleted;


//null 타입
// 유니언 타입 ( 한 가지 이상의 타입을 갖는것) null은 유니온? 유니언?? 타입과 함께 종종 사용이된다
// let user:string | null = null;
// function login(userName:string) {
//   user = userName
// }

// function logout() {
//   user = null;
// }

login("joey")
logout()

//any (모든 타입 허용)  되도록이면 사용하지 않는것이 좋음
let someValue: any;
 someValue.toString()
 someValue = false;
 someValue.toFixed();
 //타입의 안정성이 감소된다