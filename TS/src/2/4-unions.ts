// 유니언 기초

let userId: string | number;
// 문자열 또는 숫자타입을 가질 수 있다

userId = 1;
userId = "100";

// userId = true
// userId = {}

function printUserId(id: string | number) {
  console.log(id);
}

// printUserId("1")
// printUserId(1)
// printUserId({})

//type narrowing
function processValue(value: number | string) {
  //문자열일 경우
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  //숫자일 경우
  return value.toString().toUpperCase();
}

//배열 사용예시
let mixedValues: (string | number)[];

mixedValues.push("100");
mixedValues.push(100);

//리터럴과 유니언타입
//리터럴타입은 타입 자체를 값과 동시에 사용할수있음
const toggle = (option:"on" | "off") => {
  console.log(option)
}

// toggle("on")
// toggle("off")

type Size = "xs" | "s" | "m" | "l" | "xl";
let tShirtSize : Size;
tShirtSize = "l"

function setSize(size:Size){
  switch(size){
    case "xs":
      //xs 처리
      break;
    case "s":
    // s처리
      break;
  }
}

//type aliases와 유니언
type SuccessCode = 200 | 201 | 202
type ErrorCode = 500 | 501 | 503

let responseCode: SuccessCode | ErrorCode

responseCode = 200
responseCode = 503



