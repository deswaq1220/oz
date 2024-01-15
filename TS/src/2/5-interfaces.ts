// 기본문법

interface 이름 {
  속성이름 : 속성타입;
  속성이름 : 속성타입
  메서드이름(): 메서드타입;
}

// interface User {
//   id: number;
//   name: string;
//   isPremium: boolean;
//   someMethod() : void;
// }

// const userA : User = {
//   id : 10,
//   name : "bill",
//   isPremium: false,
//   someMethod() {
//     console.log("뭥시기")
//   }
// }

// type alias 와 interface의 차이점
// 두 기능의 목적은 크게 다르지 않음
// 타입 alias => type User = {}
// 인터페이스 => interface User {}
// 타입 alias => 객체 포함, 리터럴, 원시값등을 타입으로 가질 수 있다
// 인터페이스 => 객체 타입(형태)으로 사용해야한다
// 확장 문법이 다르다


//readonly & optional property

// interface User {
//   readonly id:number;
//   name: string;
//   isPremium?: boolean
// }

// const testUser: User = {
//   id: 100,
//   name : "john"
// }

// testUser.id = 200


//메서드/함수타입

interface User {
  readonly id:number;
  name: string;
  isPremium?: boolean
  greet(message:string):string;
}

const testUser: User = {
  id: 100,
  name: "nathan",
  isPremium:false,
  greet(message:string) {
    return `${message}, ${this.name}`
    // console.log("ㅎㅇㅎㅇ")
  }
}

testUser.greet("ㅎㅇㅎㅇ")


// 확장 및 조합

interface Person {
  name : string;
  age : number;
}

interface Employee{
  employeeId :number
}

interface Student extends Person,Employee {
  studentId : number
}
// person 인터페이스가 가지고 있는 프로퍼티도 같이 가지게 됨

const personA: Person = {
  name: "eli",
  age: 30
}

const studentA : Student = {
  name:"john",
  age: 26,
  studentId: 13214324,
  employeeId : 13213424
}



