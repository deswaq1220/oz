"use strict";
//문자열
const a = '';
const b = "";
const c = ``;
let myName = "steve";
let message = `Hello, ${myName}`;
//숫자 타입 소숫점이 포함된 실수도 포함한다 (number)
let n = 100;
n = "100";
n.toUpperCase();
let count = 10;
let price = 9.99;
let temperature = 15;
let distance = 3.4e-5;
let total = count & price;
let average = total / 2;
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotANumber = NaN;
//boolean
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log("hello we are open");
}
if (!isCompleted) {
    console.log("job not complete");
}
// && || !
let isAvailable = isOpen && !isCompleted;
//null 타입
// 유니언 타입 ( 한 가지 이상의 타입을 갖는것) null은 유니온? 유니언?? 타입과 함께 종종 사용이된다
// let user:string | null = null;
// function login(userName:string) {
//   user = userName
// }
// function logout() {
//   user = null;
// }
login("joey");
logout();
//any (모든 타입 허용)  되도록이면 사용하지 않는것이 좋음
let someValue;
someValue.toString();
someValue = false;
someValue.toFixed();
//타입의 안정성이 감소된다
