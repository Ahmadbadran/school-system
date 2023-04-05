
const container = document.getElementById("wrapper");
const form = document.getElementById("regForm");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let name = e.target.fullName.value;
  let age = e.target.dob.value;
  let gender = e.target.gender.value;
  let phoneNum = e.target.phoneNum.value;
  let grade = e.target.grade.value;
  let imgUrl = e.target.imgUrl.value;
  let major = e.target.major.value;
  render(name, age,imgUrl, gender,major,phoneNum,grade);
  
  
});



function render(name, age,imgUrl, gender,major,phoneNum,grade){
  

let namej = document.createElement('h1');
let agej = document.createElement('p');
let imgUrlj = document.createElement('img');
let genderj = document.createElement('p');
let majorj = document.createElement('p');
let phonej = document.createElement('p');
let gradej = document.createElement('p');

namej.textContent = name;
agej.textContent = age;
imgUrlj.src= imgUrl;
genderj.textContent = gender;
majorj.textContent = major;
phonej.textContent = phoneNum;
gradej.textContent = grade;

container.appendChild(imgUrlj);
container.appendChild(namej);
container.appendChild(agej);
container.appendChild(genderj);
container.appendChild(majorj);
container.appendChild(phonej);
container.appendChild(gradej);

const obj = { 'name': name, 'age' : age,'image':imgUrl,'gender':gender,'major':major, 'phoneNumber': phoneNum, 'grade': grade};
  sessionStorage.setItem("person", JSON.stringify(obj));
  console.log(JSON.parse(sessionStorage.getItem("person")));


};