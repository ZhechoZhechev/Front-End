const issueURL = "http://localhost:3030/jsonstore/tasks/";

const buttons = {
    laodHistoryBtn: document.querySelector("#load-history"),
    addWeatherBtn: document.querySelector("#add-weather"),
    editeWeatherBtn: document.querySelector("#edit-weather")
}
const otherElements = {
    historyList: document.querySelector("#list")
}
const inputs = {
    location: document.querySelector("#location"),
    temperature: document.querySelector("#temperature"),
    date: document.querySelector("#date")
}

buttons.laodHistoryBtn.addEventListener("click", loadHistory);
buttons.addWeatherBtn.addEventListener("click", addWeather);
buttons.editeWeatherBtn.addEventListener("click", addEditedWeather);

async function addEditedWeather(e) {
    e.preventDefault();
    let currId = e.target.getAttribute("currId");
    const [location, temperature, date] =
        [inputs.location.value, inputs.temperature.value, inputs.date.value];

    await fetch(`${issueURL}${currId}`, {
        method: "PUT",
        body: JSON.stringify({ location, temperature, date })
    });

    clearInputs(inputs);
    await loadHistory();

}

async function addWeather(e) {
    e.preventDefault();
    otherElements.historyList.innerHTML = "";

    await fetch(issueURL, {
        method: "POST",
        body: JSON.stringify({
            location: inputs.location.value,
            temperature: inputs.temperature.value,
            date: inputs.date.value
        })
    });

    buttons.editeWeatherBtn.disabled = true;
    buttons.addWeatherBtn.disabled = false;

    clearInputs(inputs);
    await loadHistory();
}

async function loadHistory() {
    otherElements.historyList.innerHTML = "";
    let weatherData = await ((await fetch(issueURL)).json());

    Object.values(weatherData).forEach(object => {
        let containerDiv = createElement("div", null, ["container"], null, otherElements.historyList);
        createElement("h2", object.location, [], null, containerDiv);
        createElement("h3", object.date, [], null, containerDiv);
        createElement("h3", object.temperature, [], "celsius", containerDiv);
        let buttonDiv = createElement("div", null, ["buttons-container"], null, containerDiv);
        let changeBtn = createElement("button", "Change", ["change-btn"], object._id, buttonDiv);
        changeBtn.addEventListener("click", prepareForEditing);
        let deleteBtn = createElement("button", "Delete", ["delete-btn"], object._id, buttonDiv);
        deleteBtn.addEventListener("click", deleteWeatherInfo);
    })
}

async function deleteWeatherInfo(e) {
    e.preventDefault();
    currId = e.target.id;

    await fetch(`${issueURL}${currId}`, {
        method: "DELETE"
    });

    await loadHistory();
}

function prepareForEditing(e) {
    const [location, temperature, date] = extractTextContents(e);

    inputs.location.value = location;
    inputs.temperature.value = Number(temperature);
    inputs.date.value = date;

    e.target.parentElement.parentElement.remove();
    buttons.editeWeatherBtn.disabled = false;
    buttons.editeWeatherBtn.setAttribute("currId", e.target.id);
    buttons.addWeatherBtn.disabled = true;
}

function extractTextContents(e) {
    let location = e.target.parentElement.parentElement.querySelector("h2").textContent;
    let date = e.target.parentElement.parentElement.querySelector("h3").textContent;
    let temperature = e.target.parentElement.parentElement.querySelector("#celsius").textContent;
    return [location, temperature, date];
}

function clearInputs(inputs) {
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