// 유틸리티 타입
{
  //Partial<T>
  // 전달된 객체의 속성들을 전부다 optional로 만들어줌
  // type User = {
  //   id: number;
  //   name: string;
  //   email: string;
  // };

  // type PartialUser = Partial<User>;

  // type Product = {
  //   id: number;
  //   price: number;
  // }

  // type PartialProduct = Partial<Product>

  // const product : PartialProduct ={

  // }

  // const produc2 : Product = {
  //   // 안댐
  // }


  //Readonly<T>
  // 속성들을 읽기 전용으로 바꿔줌 환경설정, 사용자정보등 변경하면 안되는 내용에 사용하면 유용함

  // type User = {
  //   id: number;
  //   name: string;
  // }

  // const user: Readonly<User> = {
  //   id: 1,
  //   name: "경원"
  // }

  // user.id = 10,
  // user.name = "정국"

  //Pick<T,K>
  // T라는 우리ㅏㄱ 전달하는 어더한 객체에서 K 라는 속성을 추출해라라는 뜻

  // type User = {
  //   id:number,
  //   name: string,
  //   email: string,
  // }

  // type UserWithNameOnly = Pick<User,"name">;

  // const user: UserWithNameOnly = {
  //   name: "경원"
  // }



  //Omit<T,K>
  /* 특정속성을 제외한 나머지 속성으로 새로운 타입을 만들어라 pick과 정반대인 기능을한다고 보면댐 */

  type Product = {
    id: number,
    name: string,
    price: number,
    uniqueCode: number,
  }

  type ProductWithOmit = Omit<Product,'uniqueCode'| 'price' | 'name'>;

  //Record<K,T>
  // K타입 키와 T타입의 값으로 구성된 객체 타입을 생성한다
  
  type Country = "South Korea" | "United States" | "Canada"
  type Capital = string;

  type CountryCapitals = Record<Country,Capital>

  const capitals: CountryCapitals ={
    "South Korea": "seoul",
    "United States": "Washington D.C",
    "Canada" : "Ottawa"
  }

  type CountryInfo = {
    capital :string,
    population: number,
    continent: string,
  }

  type CountryInfoMap = Record<Country,CountryInfo>

  const countryInfo: CountryInfoMap = {
    'South Korea':{
      capital:"seoul",
      population:51_000_000,
      continent:"asia"
    },
    'United States':{
      capital:"Washington D.C",
      population:331_000_000,
      continent:"어쩌고"
    },
    'Canada':{
      capital:"Ottawa",
      population: 83_000_000,
      continent:'dksf;dsj'
    }
  }

  // parameters<T>
  // 함수의 매개변수들을 추출해서 타입으로 만들어준다. 
  
  type SomeFunction = (id:number) => void;
  type Param = Parameters<SomeFunction>
  function someFunction(...param:Param){
    const [ id ] = param
  }

  someFunction(100)

  type SaveUser = (name: String, age:number)=> void;
  type Params = Parameters<SaveUser>
  function saveUser(...params:Params){
    const [name,age] = params
  }

  saveUser("David", 33)
}
