function attachEvents() {
  const issueURL = "http://localhost:3030/jsonstore/collections/students";
  const submitButton = document.querySelector("#submit");
  const tableBody = document.querySelector("#results tbody");

  loadStudents();

  submitButton.addEventListener("click", submitStudent);

  async function submitStudent() {
    const firstName = document.querySelector("input[name=firstName]").value;
    const lastName = document.querySelector("input[name=lastName]").value;
    const facultyNumber = document.querySelector("input[name=facultyNumber]").value;
    const grade = document.querySelector("input[name=grade]").value;

    let sutedntObject = { firstName, lastName, facultyNumber, grade }
    if (firstName && lastName && facultyNumber && grade) {
      await fetch(issueURL, {
        method: "POST",
        body: JSON.stringify(sutedntObject)
      });
    }
    tableBody.textContent = "";
    loadStudents()
  }
  async function loadStudents() {
    let studentsInfo = await fetch(issueURL);
    let body = await studentsInfo.json();
    let bodyValues = Object.values(body);
    bodyValues.forEach(value => {
      tableBody.appendChild(createTableRow(value));
    })
  }

  function createTableRow(object) {
    let tr = document.createElement("tr");
    let firstNameBox = document.createElement("td");
    firstNameBox.textContent = object["firstName"];
    let lastNameBox = document.createElement("td");
    lastNameBox.textContent = object["lastName"];
    let facultyNumberBox = document.createElement("td");
    facultyNumberBox.textContent = object["facultyNumber"];
    let gradeBox = document.createElement("td");
    gradeBox.textContent = object["grade"];
    tr.appendChild(firstNameBox);
    tr.appendChild(lastNameBox);
    tr.appendChild(facultyNumberBox);
    tr.appendChild(gradeBox);
    return tr;
  }

}
attachEvents();