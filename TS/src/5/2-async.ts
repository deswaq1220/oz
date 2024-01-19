// 타입스크립트와 비동기

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

// TS => 제네릭 프로미스
// Promise<T>

interface MyDataType {
  id: number;
  name: string;
}

type Config = Record<string, string>;

// {
//   "server": "https://api.com"
//   "env":"djdfd"
// }

async function loadConfig(): Promise<Config> {
  const response = await fetch("/api/config");
  const configData: Config = await response.json();
  return configData;
}

async function fetchData2<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return data as Promise<T>;
}

const fetchData = (): Promise<MyDataType> => {
  return new Promise((resolve, reject) => {
    //로직 수행(비동기)
    const success = true;
    if (success) {
      const data = {
        id: 1,
        name: "경원",
      };
      resolve(data);
    } else {
      reject("문제");
    }
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

async function doFetch() {
  //비동기 로직
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("error", error);
  }
}

doFetch();
