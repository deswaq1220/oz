"use strict";
// 기본문법
const testUser = {
    id: 100,
    name: "nathan",
    isPremium: false,
    greet(message) {
        return `${message}, ${this.name}`;
        // console.log("ㅎㅇㅎㅇ")
    }
};
testUser.greet("ㅎㅇㅎㅇ");
// person 인터페이스가 가지고 있는 프로퍼티도 같이 가지게 됨
const personA = {
    name: "eli",
    age: 30
};
const studentA = {
    name: "john",
    age: 26,
    studentId: 13214324,
    employeeId: 13213424
};
