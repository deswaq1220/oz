"use strict";
//기본 문법
let myTuple;
myTuple = ["hello", 15, false]; //oK
myTuple = ["hello", true, 1]; //Error
myTuple = ["hello", 15]; // Error
//사용예시1
function getUserInfo() {
    return [1, "sam"];
}
const [userid, username] = getUserInfo();
const vanilla = ["vanilla", 500];
vanilla[0];
vanilla[1];
let coords = [];
coords.push([35, -95]);
coords.push([38, -78]);
coords.push([false, "1"]);
for (const [lat, lng] of coords) {
    console.log(lat, lng);
}
