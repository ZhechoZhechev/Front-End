const issueURL = "http://localhost:3030/jsonstore/tasks/"
const laodCoursesBtn = document.querySelector("#load-course");
const addCourseBtn = document.querySelector("#add-course");
const editCourseBtn = document.querySelector("#edit-course");
const eventsWrapper = document.querySelector("#list");

const inputs = {
    title: document.querySelector("#course-name"),
    type: document.querySelector("#course-type"),
    description: document.querySelector("#description"),
    teacher: document.querySelector("#teacher-name")
}

laodCoursesBtn.addEventListener("click", loadCourses);
addCourseBtn.addEventListener("click", addNewCourse);
editCourseBtn.addEventListener("click", saveEditedCourse);

async function addNewCourse(e) {
    e.preventDefault();
    const [title, type, description, teacher] = readInput()
    clearInputs();
    await fetch(issueURL, {
        method: "POST",
        body: JSON.stringify({title, type, description, teacher})
    });

    await loadCourses();
}

function readInput() {
    const title = inputs.title.value;
    const type = inputs.type.value;
    const description = inputs.description.value;
    const teacher = inputs.teacher.value;
    return [title, type, description, teacher];
}

async function saveEditedCourse(e) {
    e.preventDefault();
    const courseId = e.target.getAttribute("currId");
    const [title, type, description, teacher] = readInput()
    await fetch(`${issueURL}${courseId}`, {
        method: "PUT",
        body: JSON.stringify({title, type, description, teacher})
    });
    addCourseBtn.disabled = false;
    editCourseBtn.disabled = true;

    await loadCourses();
    clearInputs();
}

async function loadCourses() {
    eventsWrapper.innerHTML = "";
    let response = await fetch(issueURL);
    let events = await response.json();

    Object.values(events).forEach(event => {
        let container = createElement("div", null, ["container"]);
        createElement("h2", event.title, [], null, container);
        createElement("h3", event.teacher, [], null, container);
        createElement("h3", event.type, [], null, container);
        createElement("h4", event.description, [], null, container);
        let editBtn = createElement("button", "Edit Course", ["edit-btn"], event._id, container);
        editBtn.addEventListener("click", loadForEdit)
        let deleteBtn = createElement("button", "Finish Course", ["finish-btn"], event._id, container);
        deleteBtn.addEventListener("click", finishCourse);
        eventsWrapper.appendChild(container);
    })
}

async function finishCourse(e){
    e.preventDefault();
    let courseToDeleteId = e.target.id;

    await fetch(`${issueURL}${courseToDeleteId}`, {
        method: "DELETE"
    });
    await loadCourses();
}

function loadForEdit(e) {
    let title = e.target.parentElement.querySelector("h2").textContent;
    let teacher = e.target.parentElement.querySelector("h3:nth-child(2)").textContent;
    let type = e.target.parentElement.querySelector("h3:nth-child(3)").textContent;
    let description = e.target.parentElement.querySelector("h4").textContent;
    inputs.title.value = title;
    inputs.teacher.value = teacher;
    inputs.type.value = type;
    inputs.description.value = description;

    e.target.parentElement.remove();
    addCourseBtn.disabled = true;
    editCourseBtn.disabled = false;
    editCourseBtn.setAttribute("currId", e.target.id)
}

function clearInputs() {
    for (const key in inputs) {
        inputs[key].value = "";
    }
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