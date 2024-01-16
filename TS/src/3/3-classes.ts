{
  //클래스

  interface ContinentInterface{
    getContinentName(): string;
  }

  interface CountryInterface{
    capital: string;
    getInfo(): string;
  }


  class Continent  implements ContinentInterface{
    continentName: string;
    constructor(name: string) {
      this.continentName = name;
    }

    getContinentName() {
      return this.continentName;
    }
  }

  class Country extends Continent implements CountryInterface{
    //필드 (객체의 상태를 나타냄)
    #name: String;
    capital: string;

    constructor(continentName:string, name: string, capital: string) {
      super(continentName) // 부모클래스의 constructor호출
      this.#name = name;
      this.capital = capital;
    }
    getInfo(){
      return `${this.#name}, ${this.capital},${this.getContinentName()}`
    }
  }

  //인스턴스
  let country = new Country("asia","south korea", "seoul");

  console.log(country.getInfo());


  //접근제어자
  //1.public - 따로 명시하지 않는다면 public이 명시됨 클래스 어느곳에서나 접근가능
  //2.private - 해당 클래스 내부에서만 접근이 가능하게 해줌
  //protected - 해당클래스 상속받는 자식 클래스까지만 접근이 가능
  //# -> private랑 같은 기능함 es5이하 버전에서는 지원이 안됨

  //추상클래스
  abstract class AbstractCountry{
    name : string;
    capital : string;

    constructor(name: string, capital:string){
      this.name = name;
      this.capital = capital
    }

    setup():void{
      console.log("setup")
    }
    abstract displayInfo():void;
  }
// 추상클래스는 인스턴스화 할 수 없다

class MyCountry extends AbstractCountry{
  displayInfo(){
    console.log("왜이래 .. 어렵잔ㅎ아,,, 갑자기 급발진,,,")
  }
}

const myCountry = new MyCountry("머여,,","어캐하는건데")
  myCountry.setup();
  myCountry.displayInfo();
}
