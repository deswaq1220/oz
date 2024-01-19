"use strict";
// 모듈
Object.defineProperty(exports, "__esModule", { value: true });
// import add from './3-util.js'
// as 를 이용해서 모듈 이름을 바꿀 수 있음
// 사용하는 경우는 하나 이상의 모듈이 같은 이름을 사용할 때가 있음 그럴때 구분하기위해 사용
const _3_util_1 = require("./3-util");
console.log(_3_util_1.appName);
const user = new _3_util_1.User("경원");
(0, _3_util_1.log)(user.getName());
const student = {
    id: 124,
    name: "경원",
    age: 18
};
function createStudentProfile(profile) {
    console.log(`${profile.studentId} , ${profile.photoUrl}`);
}
createStudentProfile({
    studentId: student.id,
    photoUrl: "https://fldfk"
});
