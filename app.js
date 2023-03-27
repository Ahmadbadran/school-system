
const container = document.getElementById("wrapper");
const containerBig = document.getElementById("containerBig");
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
  // var row = table.insertRow(-1);
  // var cell1 = row.insertCell(0);
  // cell1.innerHTML=(name);
  // var cell2 = row.insertCell(1);
  // cell2.innerHTML=(age);
  // var cell3 = row.insertCell(2);
  // cell3.innerHTML=(gender);
  // var cell4 = row.insertCell(3);
  // cell4.innerHTML=(phoneNum);
  // var cell5 = row.insertCell(4);
  // cell5.innerHTML=(grade);
  
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
containerBig.appendChild(container);



};