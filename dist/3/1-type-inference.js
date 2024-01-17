"use strict";
{
    //타입 추론
    //변슈
    let myNumber = 5;
    let myString = "hello";
    let myBool = "true";
    myNumber = 25;
    // ⬆️변수에 타입 지정이 되었더라도 내가 직접적으로 타입을 명시한것과 동일하게 동작한다
    //함수반환 타입
    function add(x, y) {
        return `${x} + ${y}`;
    }
    const n = add(10, 5);
    //배열 객체
    let nums = [1, 2, 3, 4];
    let user = { name: "eli", age: 30 };
    nums.push("hello");
    user.age = "30";
    let mixedValues = [1, 2, 4, "red", "green"];
}
