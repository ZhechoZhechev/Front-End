function generateReport() {
    let info = Array.from(document.querySelectorAll("body td"))
    .map(x => x.textContent);

    let employees  = [];

    class Employee{
        constructor(name, department, status, hiredDate, benefits, compensation, rating){
            this.name = name;
            this.department = department;
            this.status = status;
            this.hiredDate = hiredDate;
            this.benefits = benefits;
            this.compensation = compensation;
            this.rating = rating;
        }
    }

    while (info.length > 0) {
        const [name, department, status, hiredDate, benefits, compensation, rating] = info.splice(0, 7);
        let newEntry = new Employee(name, department, status, hiredDate, benefits, compensation, rating);

        employees.push(newEntry);
    }

}