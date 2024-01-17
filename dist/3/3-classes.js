"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Country_name;
{
    class Continent {
        constructor(name) {
            this.continentName = name;
        }
        getContinentName() {
            return this.continentName;
        }
    }
    class Country extends Continent {
        constructor(continentName, name, capital) {
            super(continentName); // 부모클래스의 constructor호출
            //필드 (객체의 상태를 나타냄)
            _Country_name.set(this, void 0);
            __classPrivateFieldSet(this, _Country_name, name, "f");
            this.capital = capital;
        }
        getInfo() {
            return `${__classPrivateFieldGet(this, _Country_name, "f")}, ${this.capital},${this.getContinentName()}`;
        }
    }
    _Country_name = new WeakMap();
    //인스턴스
    let country = new Country("asia", "south korea", "seoul");
    console.log(country.getInfo());
    //접근제어자
    //1.public - 따로 명시하지 않는다면 public이 명시됨 클래스 어느곳에서나 접근가능
    //2.private - 해당 클래스 내부에서만 접근이 가능하게 해줌
    //protected - 해당클래스 상속받는 자식 클래스까지만 접근이 가능
    //# -> private랑 같은 기능함 es5이하 버전에서는 지원이 안됨
    //추상클래스
    class AbstractCountry {
        constructor(name, capital) {
            this.name = name;
            this.capital = capital;
        }
        setup() {
            console.log("setup");
        }
    }
    // 추상클래스는 인스턴스화 할 수 없다
    class MyCountry extends AbstractCountry {
        displayInfo() {
            console.log("왜이래 .. 어렵잔ㅎ아,,, 갑자기 급발진,,,");
        }
    }
    const myCountry = new MyCountry("머여,,", "어캐하는건데");
    myCountry.setup();
    myCountry.displayInfo();
}
