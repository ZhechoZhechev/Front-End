const issueURL = "http://localhost:3030/jsonstore/tasks/";

const buttons = {
    loadVacation: document.querySelector("#load-vacations"),
    addVacation: document.querySelector("#add-vacation"),
    editVacation: document.querySelector("#edit-vacation"),
}

const otherElements = {
    vacationLi: document.querySelector("#list"),
}

const inputs = {
    name: document.querySelector("#name"),
    days: document.querySelector("#num-days"),
    date: document.querySelector("#from-date"),
}

buttons.loadVacation.addEventListener("click", loadAllVacations);
buttons.addVacation.addEventListener("click", addVacation);
buttons.editVacation.addEventListener("click", saveEdited);

async function saveEdited(e){
    const currId = e.target.getAttribute("currId");
    const [name, days, date] = extractFromInputs(inputs);
    clearInputs(inputs);

    await fetch(`${issueURL}${currId}`, {
        method: "PUT",
        body: JSON.stringify({name, days, date})
    })

    await loadAllVacations();
    buttons.addVacation.disabled = false;
    buttons.editVacation.disabled = true;

}

async function addVacation() {
    const [name, days, date] = extractFromInputs(inputs);
    clearInputs(inputs);

    await fetch(issueURL, {
        method: "POST",
        body: JSON.stringify({name, days, date}),
    });

    await loadAllVacations();
}

async function loadAllVacations() {
    const vacationsInfo = await ((await fetch(issueURL)).json());
    otherElements.vacationLi.innerHTML = "";
    Object.values(vacationsInfo).forEach(object => {
        const containerDiv = createElement("div", null, ["container"], null, otherElements.vacationLi);
        createElement("h2", object.name, [], null, containerDiv);
        createElement("h3", object.date, [], null, containerDiv);
        createElement("h3", object.days, [], null, containerDiv);
        const changeBtn = createElement("button", "Change", ["change-btn"], object._id, containerDiv);
        changeBtn.addEventListener("click", fillUpdateForm);
        const doneBtn = createElement("button", "Done", ["done-btn"], object._id, containerDiv);
        doneBtn.addEventListener("click", deleteVacation);
    })
}

async function deleteVacation(e){
    currId = e.target.id;

    await fetch(`${issueURL}${currId}`, {
        method: "DELETE"
    });

    await loadAllVacations();
}

function fillUpdateForm(e){
    const [name, days, date] = extractFromFields(e);
    inputs.name.value = name;
    inputs.days.value = days;
    inputs.date.value = date;

    e.target.parentElement.remove();
    buttons.addVacation.disabled = true;
    buttons.editVacation.disabled = false;
    buttons.editVacation.setAttribute("currId", e.target.id);
}

function extractFromFields(e){
    let name = e.target.parentElement.querySelector("h2").textContent;
    let days = e.target.parentElement.querySelector("h3:nth-child(3)").textContent;
    let date = e.target.parentElement.querySelector("h3:nth-child(2)").textContent;
    return [name, days, date];
}

function extractFromInputs(inputs) {
    const name = inputs.name.value;
    const days = inputs.days.value;
    const date = inputs.date.value;
    return [name, days, date];
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

function clearInputs(inputs) {
    for (const key in inputs) {
        inputs[key].value = "";
    }
}