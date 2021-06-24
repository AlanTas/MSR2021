// Student Constructor Object
let students = [];

function Student(id, name, surname, points) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.points = points;
  this.DidPass = function() {
    if (this.points > 50) {
      console.log('PASS');
    } else if (this.points < 50) {
      console.log('FAILED')
    }
  }
}

// Create Student

function createStudent() {
  let studentId = document.getElementById('studentID').value;
  let studentName = document.getElementById('studentName').value;
  let studentSurname = document.getElementById('studentSurname').value;
  let studentPoints = document.getElementById('studentPoints').value;


  let newStudent = new Student(studentId, studentName, studentSurname, studentPoints);
  students.push(newStudent);


  let PassNot = true;
  for (let i = 0; i < students.length; i++) {
    PassNot = students[i].DidPass();
  }

  // Delete Btn
  let btnDelete = document.createElement('button');
  btnDelete.classList.add('btnDelete');
  btnDelete.innerHTML = 'Delete Record'
  btnDelete.onclick = function(e) {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    for (let j = 0; j < students.length; j++) {
      if (studentId == students[j].id) {
        students.splice(j);
        tdShowID.innerText = '';
        tdShowName.innerText = '';
        tdShowSurname.innerText = '';
        tdShowPoints.innerText = '';
        tdShowDidPass.innerText = '';
        btnDelete.style.display = 'none';
      }
    }
  }


  let tableBody = document.getElementsByTagName('tbody')[0];
  let tr = document.createElement('tr');
  let tdShowID = document.createElement('td');
  tdShowID.innerText = studentId;
  let tdShowName = document.createElement('td');
  tdShowName.innerText = studentName;
  let tdShowSurname = document.createElement('td');
  tdShowSurname.innerText = studentSurname;
  let tdShowPoints = document.createElement('td');
  tdShowPoints.innerText = studentPoints;
  let tdShowDidPass = document.createElement('td');
  tdShowDidPass.innerText = PassNot;

  tr.appendChild(tdShowID);
  tr.appendChild(tdShowName);
  tr.appendChild(tdShowSurname);
  tr.appendChild(tdShowPoints);
  tr.appendChild(tdShowDidPass);
  tr.appendChild(btnDelete);
  tableBody.appendChild(tr);

}

// Logic
function checkIfStudentExists(studentId) {
  return students.some(student => student.id === studentId);
}

// Create Student
let btnSubmit = document.getElementById('btnSubmit');
btnSubmit.onclick = function() {
  createStudent();

}
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='./style/style.css' rel='stylesheet'>
  <title>Student App</title>
</head>

<body>
  <div id="container">
    <div id="formField" class='flx'>
      <label for='studentID'>Student ID</label>
      <input id='studentID' name='studentID' placeholder='student ID' required>
      <label for='studentName'>Student Name</label>
      <input id='studentName' name='studentName' placeholder='student name' required>
      <label for='studentSurname'>Student Surname</label>
      <input id='studentSurname' name='studentSurname' placeholder='student surname' required>
      <label for='studentPoints'>Student Points</label>
      <input id='studentPoints' name='studentPoints' placeholder='student points' required>
      <button id='btnSubmit'>Submit</button>
    </div>
    <hr>
    <div id="results">
      <table id='table'>
        <th>
          <td>Student ID</td>
          <td>Student Name</td>
          <td>Student Surname</td>
          <td>Student Points</td>
          <td>Student Grade</td>
          <td>Delete Record</td>
        </th>
        <tbody>

        </tbody>
      </table>
    </div>
  </div>
  <script src='./js/app.js'></script>
</body>

</html>