const table = document.getElementById("myTable");
const form = document.getElementById("regForm");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let name = e.target.fullName.value;
  let age = e.target.dob.value;
  let gender = e.target.gender.value;
  let phoneNum = e.target.phoneNum.value;
  let grade = e.target.grade.value;
  render(name, age, gender,phoneNum,grade);
});


function render(name, age, gender,phoneNum,grade){
let namej = document.createElement('td');
let agej = document.createElement('td');
let genderj = document.createElement('td');
let phonej = document.createElement('td');
let gradej = document.createElement('td');

namej.textContent = name;
agej.textContent = age;
genderj.textContent = gender;
phonej.textContent = phoneNum;
gradej.textContent = grade;

// newRow.appendChild(row);
table.appendChild(namej);
table.appendChild(agej);
table.appendChild(genderj);
table.appendChild(phonej)
table.appendChild(gradej);


};