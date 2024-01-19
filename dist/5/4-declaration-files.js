"use strict";
// 타입선언/ 정의 파일(.d.ts)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("ㅎㅇ")
// console.print("hello")
const lodash_1 = __importDefault(require("lodash"));
let max = lodash_1.default.max([1, 5, 6, 4]); //  가장 큰 값을 찾아서 반환헤주는 함수
console.log(max);
let shuffledArray = lodash_1.default.shuffle([1, 3, 64, 63, 2]); // 배열 전달 받아서 배열의 순서를 섞어서 반환
console.log(shuffledArray);
