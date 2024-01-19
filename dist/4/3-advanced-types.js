"use strict";
//고급타입
// 교차 타입(intersection type)
/* 각각의 독립적인 타입들을 관리하고 그때끄때 필요에따라 타입을 결합해서 사용할 수 있음
이런 패턴을 사용하면 타입의 재사용성 부합성을 증가 시키는데 매우 효과적임 */
{
    const person = {
        name: "John",
        age: 33,
    };
    const guest = {
        id: 100,
        name: "경원",
    };
    const user = {
        id: 123,
        name: "경오니",
        age: 20,
        email: "test@email.com",
    };
    function getProps(obj, key) {
        return obj[key];
    }
    const obj = { x: 10, y: 20, z: 15 };
    const value = getProps(obj, "y");
}
