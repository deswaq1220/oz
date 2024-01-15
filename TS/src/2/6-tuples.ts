//기본 문법

let myTuple: [string, number, boolean]

myTuple =["hello",15,false] //oK
myTuple = ["hello",true,1] //Error
myTuple = ["hello",15] // Error

//사용예시1
function getUserInfo():[number,string]{
  return[1,"sam"]
}

const [userid,username] = getUserInfo();

//사용예시 2
type Flavor = string;
type Price = number;
type IceCream = [Flavor, Price]

const vanilla: IceCream = ["vanilla",500]

vanilla[0]
vanilla[1]

//사용예시 3
type lat = number;
type lng = number;

type coord = [lat,lng];
let coords: coord[] = [];
coords.push([35,-95])
coords.push([38,-78])

coords.push([false, "1"])

for(const[lat,lng] of coords){
  console.log(lat,lng)
}
