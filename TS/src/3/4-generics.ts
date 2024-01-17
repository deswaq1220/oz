//제네릭
// 타입을 매개변수 처럼 전달해서 유연하고 재사용이 가능한 컴포넌트를 만들 수 있게 해줌
//<T>(type의 준말)

// function genericFunction<T>(arg: T) : T {
//   return arg;
// }

// interface GenericInterface<T> {

// }

// class GenericClass<T>{

// }

//Array<>가장 일반적으로 사용되는 제네릭 타입중 하나
let numbers: Array<number> = [1, 2, 3, 4, 5];
let strings: Array<string> = ["1", "2", "3"];

let div = document.querySelector<HTMLDivElement>("#mydiv1");
let button = document.querySelector<HTMLButtonElement>("#myButton1");

//제네릭을 사용하지 않았을 경우
// function getFirstElement(arr:number[]){
//   if(arr.length){
//     return undefined;
//   }

//   return arr[0];
// }

// function getFirstStringElement(arr:string[]){
//   if(arr.length){
//     return undefined;
//   }

//   return arr[0];
// }

// const firstNumber = getFirstElement(numbers);
// const firstString = getFirstStringElement(strings)

//제네릭을 사용한경우
// 하나의 함수를 통해서 다양한 타입을 유연하게 처리할 수 있게 함
function getFirstElement<T>(arr: T[]): T | undefined {
  if (arr.length) {
    return undefined;
  }

  return arr[0];
}

const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);

// 제네릭 인터페이스

interface Dict<T> {
  [key: string]: T;
}

// interface strDict {
//   [key:string]: string
// }
let strObj: Dict<string> = {
  name: "elliot",
};

// interface numDict {
//   [key:string]:number
// }

let numObj: Dict<number> = {
  age: 30,
};

// 하나 이상의 파라미터를 지원함, 여러 타입의 매개변수를 가진 제네릭 타입이나 함수를 정의할 수 있다.
interface Entry<K, V> {
  key: K;
  value: V;
}

let entry: Entry<string, number> = {
  key: "age",
  value: 30,
};

let entry2: Entry<number, string[]> = {
  key: 1,
  value: ["red", "green", "blue"],
};
