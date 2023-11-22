function solve() {
    document.querySelector("#btnSend").addEventListener("click", onClick);

    class Worker {
        constructor(name, salary) {
            this.name = name;
            this.salary = salary;
        }
    }

    class Restaurant {
        constructor(name) {
            this.name = name;
            this.workers = [];
        }

        get avgSalary() {
            const avgSalary = this.workers.reduce((acc, curr) => {
                acc += curr.salary;
                return acc;
            }, 0);
            return (avgSalary / this.workers.length).toFixed(2);
        }

        get bestSalary() {
            return Math.max(...this.workers.map(worker => worker.salary)).toFixed(2);
        }

        addWorker(workerName, workerSalary) {
            let worker = new Worker(workerName, workerSalary);
            this.workers.push(worker);
        }
    }

    function onClick() {
        let input = JSON.parse(document.querySelector("#inputs textarea").value);
        let restaurants = [];

        
        input.forEach(el => {
            const [restName, workersDetails] = el.split(" - ");
            let restaurant = restaurants.find(r => r.name === restName);

            if (!restaurant) {
                restaurant = new Restaurant(restName);
                restaurants.push(restaurant);
            }

            workersDetails.split(", ").forEach(worker => {
                const [name, salary] = worker.split(" ");
                restaurant.addWorker(name, Number(salary));
            });

        });

        let topAvgSalary = (Math.max(...restaurants.map(x => x.avgSalary))).toFixed(2);
        let topRestaurantObj = restaurants.find(restaurant => restaurant.avgSalary === topAvgSalary);
        let topRestName = topRestaurantObj.name;
        let topRestBestSalary = topRestaurantObj.bestSalary;
        let topRestWorkers = topRestaurantObj.workers;

        const winner = `Name: ${topRestName} Average Salary: ${topAvgSalary} Best Salary: ${topRestBestSalary}`;
        const listWorkers = getMsgEmp(topRestWorkers);

        document.querySelector('#bestRestaurant>p').textContent = winner;
        document.querySelector('#workers>p').textContent = listWorkers;
 
    }

    function getMsgEmp(workers) {

        workers.sort((a, b) => b.salary - a.salary);
        return workers.map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');
    }

}