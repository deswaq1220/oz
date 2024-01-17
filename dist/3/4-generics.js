"use strict";
//제네릭
// 타입을 매개변수 처럼 전달해서 유연하고 재사용이 가능한 컴포넌트를 만들 수 있게 해줌
//<T>(type의 준말)
// function genericFunction<T>(arg: T) : T {
//   return arg;
// }
// interface GenericInterface<T> {
// }
// class GenericClass<T>{
// }
//Array<>가장 일반적으로 사용되는 제네릭 타입중 하나
let numbers = [1, 2, 3, 4, 5];
let strings = ["1", "2", "3"];
let div = document.querySelector("#mydiv1");
let button = document.querySelector("#myButton1");
//제네릭을 사용하지 않았을 경우
// function getFirstElement(arr:number[]){
//   if(arr.length){
//     return undefined;
//   }
//   return arr[0];
// }
// function getFirstStringElement(arr:string[]){
//   if(arr.length){
//     return undefined;
//   }
//   return arr[0];
// }
// const firstNumber = getFirstElement(numbers);
// const firstString = getFirstStringElement(strings)
//제네릭을 사용한경우
// 하나의 함수를 통해서 다양한 타입을 유연하게 처리할 수 있게 함
function getFirstElement(arr) {
    if (arr.length) {
        return undefined;
    }
    return arr[0];
}
const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);
// interface strDict {
//   [key:string]: string
// }
let strObj = {
    name: "elliot",
};
// interface numDict {
//   [key:string]:number
// }
let numObj = {
    age: 30,
};
let entry = {
    key: "age",
    value: 30,
};
let entry2 = {
    key: 1,
    value: ["red", "green", "blue"],
};
