"use strict";
// 기본문법
var 이름;
(function (이름) {
    이름[이름["\uC0C1\uC218\uAC121"] = 1] = "\uC0C1\uC218\uAC121";
    이름[이름["\uC0C1\uC2182"] = 2] = "\uC0C1\uC2182";
    이름[이름["\uC0C1\uC2183"] = 3] = "\uC0C1\uC2183";
})(이름 || (이름 = {})); // 모든 상수값들을 이넘의 멤버라고하고 멤버마다 할당값이 존재한다. 멤버에 대응하는 구체적인 값
// 1씩 증가하는 값으로 자동으로 할당해줌
// 숫자형 enum
var PlayerState;
(function (PlayerState) {
    PlayerState[PlayerState["Buffering"] = 0] = "Buffering";
    PlayerState[PlayerState["Playing"] = 1] = "Playing";
    PlayerState[PlayerState["Paused"] = 2] = "Paused";
    PlayerState[PlayerState["Seeking"] = 3] = "Seeking";
})(PlayerState || (PlayerState = {}));
let currentState;
currentState = PlayerState.Buffering;
currentState = PlayerState.Playing;
// currentState ="Playing" 
const isPlaying = (state) => {
    return state === PlayerState.Playing;
};
//플레이어 재생중??
isPlaying(currentState); //true
// 문자형 enum
// 이넘의 각 멤버에게 명시적인 문자열 값을 할당해준다
var Direction;
(function (Direction) {
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
})(Direction || (Direction = {}));
function move(dir) {
    switch (dir) {
        case Direction.Left:
            //로직처리
            break;
        // ....
    }
}
move(Direction.Left);
move(Direction.Right);
