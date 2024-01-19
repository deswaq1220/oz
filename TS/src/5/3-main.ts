// 모듈

// import add from './3-util.js'
// as 를 이용해서 모듈 이름을 바꿀 수 있음
// 사용하는 경우는 하나 이상의 모듈이 같은 이름을 사용할 때가 있음 그럴때 구분하기위해 사용
import{log as Logger,appName,User} from './3-util'

console.log(appName)

const user = new User("경원")

Logger(user.getName());


//타입 불러오기

import { Student,StudentProfile } from './3-student'; 

const student: Student ={
  id: 124,
  name:"경원",
  age:18
}


function createStudentProfile(profile:StudentProfile){
  console.log(`${profile.studentId} , ${profile.photoUrl}`)
}

createStudentProfile({
  studentId:student.id,
  photoUrl:"https://fldfk"
})

