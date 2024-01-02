const form = document.getElementById("form")

form.addEventListener("submit", (e) =>{
  e.preventDefault();

  let userEmail = e.target.email.value
  let userName = e.target.name.value
  let userPw1 = e.target.pw1.value
  let userPw2 = e.target.pw2.value
  let userPhone1 = e.target.phone1.value;
  let userPhone2 = e.target.phone2.value;
  let userPhone3 = e.target.phone3.value;
  let userRegion = e.target.region.value
  let userGender = e.target.gender.value

  console.log(userEmail);
  console.log(userName);
  console.log(userPw1);
  console.log(userPw2);
  console.log(userPhone1,userPhone2,userPhone3);
  console.log(userRegion);
  console.log(userGender);

  const userData ={
    email : userEmail,
    name : userName,
    password1 : userPw1,
    password2 : userPw2,
    phone : {
      number1 : userPhone1,
      number2 : userPhone2,
      number3 : userPhone3,
    },
    region : userRegion,
    gender : userGender
  }
  const userString = JSON.stringify(userData)
  localStorage.setItem("user",userString)

  console.log(userData)

 

})