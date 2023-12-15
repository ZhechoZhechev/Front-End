const issueURL = "http://localhost:3030/jsonstore/tasks/";
const toDoLi = document.querySelector("#todo-list");
const taksNameInput = document.querySelector("#title");

const buttons = {
    loadAllBtn: document.querySelector("#load-button"),
    addTaskBtn: document.querySelector("#add-button"),
}


function attachEvents() {
    buttons.loadAllBtn.addEventListener("click", loadAllTodo);
    buttons.addTaskBtn.addEventListener("click", addTask);
}

async function addTask(e){
    e.preventDefault();
    const name = taksNameInput.value;
    taksNameInput.value = "";
    toDoLi.innerHTML = "";

    await fetch(issueURL, {
        method: "POST",
        body: JSON.stringify({name})
    });

    await loadAllTodo()
}

async function loadAllTodo(e) {
    if (e) {
        e.preventDefault();
    }
    const tasks = await ((await fetch(issueURL)).json());
    toDoLi.innerHTML = "";

    Object.values(tasks).forEach(task => {
        const li = createElement("li", null, [], null, toDoLi);
        createElement("span", task.name, [], null, li);
        const removeBtn = createElement("button", "Remove", [], task._id, li);
        removeBtn.addEventListener("click", removeTask);
        editBtn = createElement("button", "Edit", [], task._id, li);
        editBtn.addEventListener("click", loadForEditing);
    });
}

function loadForEditing(e){
    e.preventDefault();
    const li = e.target.parentElement;
    const span = e.target.parentElement.querySelector("span");
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    li.replaceChild(input, span);

    const editBtn = li.querySelector("button:nth-child(3)");
    editBtn.textContent = "Submit";
    editBtn.removeEventListener("click", loadForEditing);
    editBtn.addEventListener("click", submitEditedEvent);
}

async function submitEditedEvent(e){
    e.preventDefault();
    const eventId = e.target.id;
    const name = e.target.parentElement.querySelector("input").value;

    await fetch(`${issueURL}${eventId}`, {
        method: "PATCH",
        body: JSON.stringify({name})
    })

    await loadAllTodo();
}

async function removeTask(e){
    taskId = e.target.id;

    await fetch(`${issueURL}${taskId}`, {
        method: "DELETE"
    });

    await loadAllTodo();
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
