window.addEventListener('load', solve);

function solve() {
    const inputs = {
        title: document.querySelector("#title"),
        description: document.querySelector("#description"),
        label: document.querySelector("#label"),
        points: document.querySelector("#points"),
        assignee: document.querySelector("#assignee")
    }

    const buttons = {
        createBtn: document.querySelector("#create-task-btn"),
        deleteBtn: document.querySelector("#delete-task-btn")
    }
    const otherTargets = {
        tasksSection: document.querySelector("#tasks-section"),
        totalPointsP: document.querySelector("#total-sprint-points")
    }

    const labeToIconsMap = {
        "Feature": "&#8865",
        "Low Priority Bug": "&#9737",
        "High Priority Bug": "&#9888"
    }

    const labelToClassName = {
        'Feature': 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority'
    }

    const tasks = {};
    buttons.createBtn.addEventListener("click", addTask);
    buttons.deleteBtn.addEventListener("click", deleteTask);

    function addTask() {
        const { title, description, label, points, assignee } = inputs;
        for (const key in inputs) {
            if (!inputs[key].value || inputs[key].value.trim() === "") {
                return;
            }
        }

        const taskId = `task-${Object.values(tasks).length + 1}`;
        const article = createElementAdv("article", null, otherTargets.tasksSection, ["task-card"], taskId, null);
        createElementAdv('div', `${label.value} ${labeToIconsMap[label.value]}`, article, ['task-card-label', labelToClassName[label.value]], null, true);
        createElementAdv("h3", `${title.value}`, article, ["task-card-title"]);
        createElementAdv("p", `${description.value}`, article, ["task-card-description"]);
        createElementAdv("div", `Estimated at ${points.value} pts`, article, ["task-card-points"]);
        createElementAdv("div", `Assigned to: ${assignee.value}`, article, ["task-card-assignee"])
        const divActions = createElementAdv("div", null, article, ["task-card-actions"]);
        const deleteBtn = createElementAdv("button", "Delete", divActions);
        tasks[taskId] = {
            title: title.value,
            description: description.value,
            label: label.value,
            points: points.value,
            assignee: assignee.value
        }
        otherTargets.totalPointsP.textContent = `Total Points ${calculateTotalPoints(tasks)}pts`;
        deleteBtn.addEventListener("click", confirmDelete);
        clearAllInputs(inputs);
    }

    function deleteTask(){
        let taskId = document.querySelector("#task-id").value;
        let taskCardToRemove = document.querySelector(`#${taskId}`);
        clearAllInputs(inputs);
        Object.values(inputs).forEach(input =>{
            input.removeAttribute("disabled");
        });
        buttons.createBtn.removeAttribute("disabled");
        buttons.deleteBtn.setAttribute("disabled", true);
        delete tasks[taskId];
        otherTargets.totalPointsP.textContent = `Total Points ${calculateTotalPoints(tasks)}pts`;
        taskCardToRemove.remove();
    }

    function confirmDelete(e){
        let taskId = e.target.parentElement.parentElement.id;
        document.querySelector("#task-id").value = taskId;
        let taskToDel = tasks[taskId];
        for (const key in inputs) {
            inputs[key].value = taskToDel[key];
        }

        Object.values(inputs).forEach(input =>{
            input.setAttribute("disabled", true);
        })
        buttons.createBtn.setAttribute("disabled", true);
        buttons.deleteBtn.removeAttribute("disabled");

    }

    function calculateTotalPoints(obj) {
        return Object.values(obj).map(x => x.points).reduce((acc, curr) => {
            acc += Number(curr);
            return acc;
        }, 0)
    }

    function clearAllInputs(obj) {
        for (const key in obj) {
            obj[key].value = "";
        }
    }

    function createElementAdv(type, content, parentNode, classes, id, useInnerHtml) {
        const element = document.createElement(type);

        if (content && useInnerHtml) {
            element.innerHTML = content;
        } else {
            if (content && type !== 'input') {
                element.textContent = content;
            }

            if (content && type === 'input') {
                element.value = content;
            }
        }

        if (classes && classes.length > 0) {
            element.classList.add(...classes);
        }

        if (id) {
            element.setAttribute('id', id);
        }

        if (parentNode) {
            parentNode.appendChild(element);
        }

        return element;
    }
}