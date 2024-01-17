"use strict";
//parameter
function add(x, y) {
    return x + y;
}
const result = add(10, 5);
//parameter2
// function addToCart(name:string, price:number,quantity:number){
//   return `${name},${price},${quantity}`
// }
// addToCart("orange",100,5)
// addToCart("painapple",150)
// addToCart("grape",110,10,false)
//default parameter
// function addToCart(name:string, price:number,quantity:number = 1){
//     return `${name},${price},${quantity}`;
//   }
//   addToCart("orange", 10)
//   addToCart("pineapple",5,4)
//optional parameter
function addToCart(name, price, quantity) {
    return `${name},${price},${quantity}`;
}
addToCart("Orange", 150);
addToCart("grape", 100, 2);
//contextual typing
// const numbers: number[] =[1,2,3,4,5]
// const letters: string[] = ["a","b","c"]
// numbers.map(element = >{
//   element.
// })
// letters.forEach((letter) => {
//   letter.~
// })
//Return type annotaion
function addTwoValues(x, y) {
    return `${x}${y}`;
}
function addTwoNumbers(x, y) {
    return x + y;
}
function isTen(x, y) {
    return x + y === 10;
}
//void, never 
// 해당함수가 반환값이 없을경우 void
function logMessage(message) {
    console.log(message);
}
//해당함수가 절대 반환이 없을경우,, ex) 예외처리
// 용도가 제한적이라 애플리케이션 개발시 자주 사용되지 않는다.
function throwError(message) {
    throw new Error(message);
}
