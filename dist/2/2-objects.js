"use strict";
// 기본 객체 타입
//타입 명시
// let monitor: {brand:string, price:number}
// monitor.brand = "lg"
// monitor.price = 120
// monitor = {
//   brand :'lg',
//   price : 120
// };
// monitor.displaySize = "22inch"
//타입 추론
let monitor = {
    brand: "lg",
    price: 120
};
monitor.price = "123";
monitor.displaySize = "12inch";
// Optional 프로퍼티  객체 내에서 필수가 아닌 프로퍼티\
// let user: {id:string,name:string; age?: number};
// user = {
//   id:"1234",
//   name:"John"
// }
// readonly 프로퍼티
let user;
user = {
    id: "1234",
    name: "John"
};
user.name = "john Smith";
user.id = "1234";
let apiConfig;
let user1 = {
    id: "1",
    name: "John",
    age: 20
};
let user2 = {
    id: "2",
    name: "sarah",
    age: 30
};
let users;
users.push(user1);
users.push(user2);
const payload = {
    timeStamp: 1234,
    type: 'event',
    user: {
        id: "123",
        isActive: true,
        email: ["email"]
    }
};
