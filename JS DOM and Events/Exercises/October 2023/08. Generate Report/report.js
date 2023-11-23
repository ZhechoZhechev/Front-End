// function generateReport() {
//     let info = Array.from(document.querySelectorAll("body td"))
//         .map(x => x.textContent);

//     let employees = [];

//     class Employee {
//         constructor(employee, department, status, dateHired, benefits, compensation, rating) {
//             this.employee = employee;
//             this.department = department;
//             this.status = status;
//             this.dateHired = dateHired;
//             this.benefits = benefits;
//             this.compensation = compensation;
//             this.rating = rating;
//         }
//     }

//     while (info.length > 0) {
//         const [employee, department, status, dateHired, benefits, compensation, rating] = info.splice(0, 7);
//         let newEntry = new Employee(employee, department, status, dateHired, benefits, compensation, rating);

//         employees.push(newEntry);
//     }

//     let checkBoxes = Array.from(document.querySelectorAll("input[type=checkbox]"));
//     let resultArray  = [];

//     employees.forEach(employee => {
//         let currentObject = {};

//         checkBoxes.forEach(box => {
//             if (box.checked) {
//                 let text =  box.parentElement.textContent.trim().toLowerCase();
//                 if (text === "date hired") text = "dateHired";
//                 currentObject[text] = employee[text];
//             }
//         });

//         resultArray.push(currentObject);
//     });

//     document.getElementById('output').value = JSON.stringify(resultArray);
// }

function generateReport() {
    let output = document.querySelector('#output')
    let boxes = document.querySelectorAll('thead tr th input')
    let info = document.querySelectorAll('tbody tr')
    let result = []
 
    for (let i = 0; i < info.length; i++) {
        let report = {}
        for (let j = 0; j < boxes.length; j++) {
            if (boxes[j].checked) {
                report[boxes[j].name] = info[i].children[j].textContent
            }
        }
        result.push(report)
    }
    output.textContent = JSON.stringify(result)
}
