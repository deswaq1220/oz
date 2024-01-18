// 여기에 StatusCodes 객체를 생성하세요.
const StatusCodes = {
	404: "Not Found"
} as const

// 주어진 상태 코드에 대한 메시지를 반환하는 함수를 작성하세요.
function getMessage(statusCode: keyof typeof StatusCodes): string {
  return StatusCodes[statusCode];
}