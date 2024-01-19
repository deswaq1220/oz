//에러 처리

// try{ 
//   // 에러가 발생할 수 도 잇는 코드를 실행
  
// }catch(error){
//   // 에러를 캐치하는 공간
// }finally{
//   // 에러 여부와 상관없이 항상 실행된다.
// }


function checkPositiveNumber(num: number){
  if(num<0){
    //예외 발생
    throw new Error("number should be positive")
  }
  console.log(`${num} is 아 몰러`)
}

try{
  checkPositiveNumber(10)
  checkPositiveNumber(-10)
} catch (error:unknown) {
  // 캐치 블럭의 매개변수를 타입할 수 있음 any, unknown 언노운 선택하는게 애니보다 안전한 애니는 타입 검사 없이 접근이 가능함 언노운은 명시적인 타입검사를 해야함
  if(error instanceof Error){
    console.error(error.message)
  }
}

class CustomError extends Error {
  constructor(message: string){
    super(message)
    this.name="customError"
  }
}
try{
  throw new CustomError("커스ㅓㅁ 에러")
}catch (error){
  if(error instanceof CustomError){
    console.error(error.message)
  }
}