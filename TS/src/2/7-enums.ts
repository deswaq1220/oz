// 기본문법

enum 이름{
  상수값1 = 1,
  상수2,
  상수3,
} // 모든 상수값들을 이넘의 멤버라고하고 멤버마다 할당값이 존재한다. 멤버에 대응하는 구체적인 값
// 1씩 증가하는 값으로 자동으로 할당해줌
// 숫자형 enum

enum PlayerState {
  Buffering,
  Playing,
  Paused,
  Seeking,
}

let currentState:PlayerState;
currentState = PlayerState.Buffering;
currentState = PlayerState.Playing;

// currentState ="Playing" 

const isPlaying = (state:PlayerState) => {
  return state === PlayerState.Playing
}
//플레이어 재생중??
isPlaying(currentState) //true



// 문자형 enum
// 이넘의 각 멤버에게 명시적인 문자열 값을 할당해준다
enum Direction {
  Left = "LEFT",
  Right = "RIGHT",
  Up = "UP",
  Down = "DOWN"
}

function move(dir: Direction){
  switch(dir){
    case Direction.Left:
      //로직처리
    break
    // ....
  }
}

move(Direction.Left)
move(Direction.Right)

