"use strict";
// 타입 좁히기
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let id = 1;
if (typeof id === "string") {
    // 문자열 ID 경우 로직처리
}
function getId(id) {
    if (typeof id === "number") {
        return id;
    }
    return Number(id);
}
getId(1);
getId("1");
function power(option) {
    if (option === "off") {
        console.log("power off");
    }
    else {
        console.log("power on");
    }
}
power("on");
power("off");
function sendMessage(os) {
    if ("iMessage" in os) {
        os.iMessage(); // iOS 로 좁혀진다
    }
    else {
        os.message(); // android 케이스
    }
}
sendMessage({ iMessage: () => { console.log("sending iMessage"); } }); // iOS 타입
sendMessage({ message: () => { console.log("sending message"); } }); // android 타입
// instanceof narrowing
// myObject 라는 객체가 MyObject 클래스에 인스턴스인지 확인을 해주고 그럴 경우 특정 동작을 수행하도록 한다 라는 패턴
let myObject = new MyObject();
if (myObject instanceof MyObject) {
    // 이런식으로 확인을 해주는 작업을 인스턴스옵 네로잉이라 함
}
class ApiResponse {
}
class ErrorResponse {
}
function handleApiResponse(response) {
    return __awaiter(this, void 0, void 0, function* () {
        if (response instanceof ApiResponse) {
            // 데이터 처리
        }
        else if (response instanceof ErrorResponse) {
            //에러 처리
        }
    });
}
const apiResponse = new ApiResponse();
const errorResponse = new ErrorResponse();
handleApiResponse(apiResponse);
handleApiResponse(errorResponse);
//타입 가드(type predicates)
//  이런식의 패턴을 사용한다면 복잡해질수도 있는 타입체킹로직을 하나의 함수로 따로 추출해서 사용할 수 있기 때문에 코드 관리와 가독성면에서 큰 이점을 가져다 준다
function isErrorResponse(response) {
    return response.message !== undefined;
}
const response = { message: "error.." };
if (isErrorResponse(response)) {
    //에러케이스
    console.log(response.message);
}
function handleResponse(response) {
    if (response.type === "success") {
        console.log('data:', response.data);
    }
    else {
        console.log(response.message);
    }
}
/* 함수를 통해 전달된 response 객체는 식별 가능한 유니언 타입 필드를 통해서 구분을 해준다
유니언 타입을 매개변수로 받아서 값에 따라 성공응답인지 에러응답인지를 판별해서 각각에 맞는 로직을 처리해주는 패턴을 사용햐ㅐ볼수 있음
 */
