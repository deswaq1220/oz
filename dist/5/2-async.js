"use strict";
// 타입스크립트와 비동기
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 비동기 프로그래밍
//promise - 비동기 작업을 위한 js 객체
const sync = () => {
    console.log("동기 작업");
};
const asyncFn = () => {
    return new Promise((resolve) => {
        resolve("비동기작업 완료");
    });
};
function main() {
    sync();
    asyncFn().then((value) => console.log(value));
    sync();
    sync();
    sync();
}
main();
// {
//   "server": "https://api.com"
//   "env":"djdfd"
// }
function loadConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("/api/config");
        const configData = yield response.json();
        return configData;
    });
}
function fetchData2(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    });
}
const fetchData = () => {
    return new Promise((resolve, reject) => {
        //로직 수행(비동기)
        const success = true;
        if (success) {
            const data = {
                id: 1,
                name: "경원",
            };
            resolve(data);
        }
        else {
            reject("문제");
        }
    });
};
fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
function doFetch() {
    return __awaiter(this, void 0, void 0, function* () {
        //비동기 로직
        try {
            const data = yield fetchData();
            console.log(data);
        }
        catch (error) {
            console.error("error", error);
        }
    });
}
doFetch();
