//고급타입

// 교차 타입(intersection type)
/* 각각의 독립적인 타입들을 관리하고 그때끄때 필요에따라 타입을 결합해서 사용할 수 있음
이런 패턴을 사용하면 타입의 재사용성 부합성을 증가 시키는데 매우 효과적임 */

{
  type A = { name: string };
  type B = { age: number };

  type Person = A & B; // 서로 다른 타입 a,b에 있는 모든 속성을 포함하는 객체를 생성할때 사용ㅎ된다

  const person: Person = {
    name: "John",
    age: 33,
  };

  type UserBase = { id: number };
  type WithName = { name: string };
  type WithEmail = { email: string };
  type WithAge = { age: number };

  type GuestUser = UserBase & WithName;
  type User = UserBase & WithName & WithEmail & WithAge;

  const guest: GuestUser = {
    id: 100,
    name: "경원",
  };

  const user: User = {
    id: 123,
    name: "경오니",
    age: 20,
    email: "test@email.com",
  };

  // 조건부 타입 (conditional type)
  // type Conditional = T extends U ? X : Y;

  type IsNumber<T> = T extends number ? "yes" : "no";

  type Result1 = IsNumber<number>; // yes 반환
  type Result2 = IsNumber<string>; // no 반환

  type JsonOrText<T extends "json" | "text"> = T extends "json"
    ? object
    : string;

  type JsonResponse = JsonOrText<"json">;
  type TextResponse = JsonOrText<"text">;

  //keyof 타입 연산자
  // 속성이름을 문자열 리터럴 또는 숫자리터럴로 추출할때 사용되는 패턴
  // 연산자를 통해서 객체 키를 유니언 타입으로 가지고 올 수 있음

  type MyObject = {
    a: number;
    b: string;
    c: boolean;
  };

  //MyObject 키를 union 타입으로 추출
  type keys = keyof MyObject; // "a" | "b" | "c"

  function getProps<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  const obj = { x: 10, y: 20, z: 15 };
  const value = getProps(obj, "y");
  // 무슨소리여,, 장난하나,, 장난둘

  // mapped type (매핑 타입)
  /*   기존타입에 각 프로퍼티들으 ㄹ반복해서 새로은 타입을 생성
  그 ㅘ정을 통해서 프로퍼티 타입을 변경하거나 새로운 속성우 ㄹ추가할때 사용 */

  // type Mapped<T> = {
  //   [P in keyof T]: T[P]
  // }

  
  type OptionalType<T> = {
    [P in keyof T]?: T[P];
  };


  type ReadOnlyType<T> = {
    readonly [P in keyof T]: T[P];
  };

  type UserType = {
    id: number,
    name: string,
    age:number,
    email:string,
  }
  // ㅕusertype 의 모든 속성을 선택적으로 변환
  type OptionalUserType = OptionalType<UserType>
  // usertype의 모든 속성으 ㄹ읽기 전용으로 변환
  type ReadOnlyUserType = ReadOnlyType<UserType>
}
