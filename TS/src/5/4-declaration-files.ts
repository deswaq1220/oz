// 타입선언/ 정의 파일(.d.ts)

// console.log("ㅎㅇ")

// console.print("hello")

import _ from "lodash";

let max = _.max([1,5,6,4]) //  가장 큰 값을 찾아서 반환헤주는 함수
console.log(max)

let shuffledArray = _.shuffle([1,3,64,63,2]) // 배열 전달 받아서 배열의 순서를 섞어서 반환

console.log(shuffledArray)
