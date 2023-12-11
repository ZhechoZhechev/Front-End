const issueUrl = "http://localhost:3030/jsonstore/tasks/";
const loadBoardBtn = document.querySelector("#load-board-btn");
const addTaskBtn = document.querySelector("#create-task-btn");

const statusToUls = {
    "ToDo": document.querySelector("#todo-section .task-list"),
    "In Progress": document.querySelector("#in-progress-section .task-list"),
    "Code Review": document.querySelector("#code-review-section .task-list"),
    "Done": document.querySelector("#done-section .task-list")
}

const statusToButtonText = {
    "ToDo": "Move To In Progress",
    "In Progress": "Move To Code Rewie",
    "Code Review": "Move To Done",
    "Done": "Close"
}

const inputFields = {
    title: document.querySelector("#title"),
    description: document.querySelector("#description")
}

function attachEvents() {
    loadBoardBtn.addEventListener("click", loadBoard);
    addTaskBtn.addEventListener("click", addATask);
}

function addATask() {
    fetch(issueUrl, {
        method: "POST",
        body: JSON.stringify({
            title: inputFields.title.value,
            description: inputFields.description.value,
            status: "ToDo"
        })
    })
    inputFields.title.value = "";
    inputFields.description.value = "";
    loadBoard();
}

async function loadBoard() {
    clearAllSections();
    let info = await fetch(issueUrl);
    let allBoardsInfo = await info.json();

    Object.values(allBoardsInfo).forEach(obj => {
        const ulDestination = statusToUls[obj.status];
        let li = createElement("li", null, ["task"], null, ulDestination);
        createElement("h3", `${obj.title}`, [], null, li);
        createElement("p", `${obj.description}`, [], null, li);
        createElement("button", `${statusToButtonText[obj.status]}`, [], null, li)
    })
}

function clearAllSections() {
    Object.values(statusToUls)
        .forEach((section) => {
            section.innerHTML = '';
        })
}



function createElement(type, textContent, classes, id, parent) {
    const element = document.createElement(type);

    if (textContent) {
        element.textContent = textContent;
    }

    if (classes && classes.length > 0) {
        element.classList.add(...classes);
    }

    if (id) {
        element.setAttribute("id", id);
    }

    if (parent) {
        parent.appendChild(element);
    }

    return element;
}

attachEvents();