"use strict";
// 유니언 기초
let userId;
// 문자열 또는 숫자타입을 가질 수 있다
userId = 1;
userId = "100";
// userId = true
// userId = {}
function printUserId(id) {
    console.log(id);
}
// printUserId("1")
// printUserId(1)
// printUserId({})
//type narrowing
function processValue(value) {
    //문자열일 경우
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    //숫자일 경우
    return value.toString().toUpperCase();
}
//배열 사용예시
let mixedValues;
mixedValues.push("100");
mixedValues.push(100);
//리터럴과 유니언타입
//리터럴타입은 타입 자체를 값과 동시에 사용할수있음
const toggle = (option) => {
    console.log(option);
};
let tShirtSize;
tShirtSize = "l";
function setSize(size) {
    switch (size) {
        case "xs":
            //xs 처리
            break;
        case "s":
            // s처리
            break;
    }
}
let responseCode;
responseCode = 200;
responseCode = 503;
