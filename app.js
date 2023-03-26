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
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  cell1.innerHTML=(name);
  var cell2 = row.insertCell(1);
  cell2.innerHTML=(age);
  var cell3 = row.insertCell(2);
  cell3.innerHTML=(gender);
  var cell4 = row.insertCell(3);
  cell4.innerHTML=(phoneNum);
  var cell5 = row.insertCell(4);
  cell5.innerHTML=(grade);

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

// // newRow.appendChild(row);
// table.appendChild(namej);
// table.appendChild(agej);
// table.appendChild(genderj);
// table.appendChild(phonej)
// table.appendChild(gradej);


};
