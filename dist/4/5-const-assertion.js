"use strict";
// 상수 단언
// 코드가 타입 시스템에 반영이 되ㄷ록하ㅣㄴ디 
// 타입의 의도를 좀더 분명하게 함
{
    //객체
    // const book = {
    //   title: "typeScript Guide",
    //   author: "coding",
    // } as const;
    // book.title = "anjds";
    // // 배열
    // const nums = [1, 2, 3, 4, 5] as const;
    // nums.push(6)
    const config = {
        server: "https://api.somedomain.com",
        port: 8080,
        version: 2,
    };
    config.server = "https";
    // 주문 시스템의 상태 정보
    export const statusCodeMap = {
        101: "ordered",
        102: "pending",
        103: "completed"
    };
    function handleStatus(statusCode) {
        const message = statusCodeMap[statusCode];
        //UI 업데이트 또는 로직처리
    }
}
