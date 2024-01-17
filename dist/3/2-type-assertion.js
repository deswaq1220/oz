"use strict";
{
    //타입 단언
    //표현식 as 지정할 타입
    const someValue = "hey there";
    const len = someValue.length; //
    const button = document.getElementById("button");
    //* 버튼이 실질적으로 html 문서에 존재하지 않을땐 확인해줘야함
    if (button instanceof HTMLButtonElement) {
        button.disabled = false;
    }
    if (button) {
        button.disabled = false;
    }
    // 정말 필요하고 타입에 대한 확신이 있을 경우에만 사용하도록
}
