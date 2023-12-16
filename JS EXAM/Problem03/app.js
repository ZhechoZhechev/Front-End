const issueURL = "http://localhost:3030/jsonstore/tasks/";

const buttons = {
    loadMealsBtn: document.querySelector("#load-meals"),
    addMealBtn: document.querySelector("#add-meal"),
    editMealBtn: document.querySelector("#edit-meal")
}

const otherElements = {
    divListAllMeals: document.querySelector("#list"),
}

const inputs = {
    food: document.querySelector("#food"),
    time: document.querySelector("#time"),
    calories: document.querySelector("#calories"),
}

buttons.loadMealsBtn.addEventListener("click", loadAllMeals);
buttons.addMealBtn.addEventListener("click", addNewMeal);
buttons.editMealBtn.addEventListener("click", saveEditedMeal);

async function saveEditedMeal(e){
    e.preventDefault();
    currId = e.target.getAttribute("currId");
    const [food, time, calories] = extractFromInputs(inputs);
    clearInputs(inputs);

    await fetch(`${issueURL}${currId}`, {
        method: "PUT",
        body: JSON.stringify({food, time, calories})
    });

    await loadAllMeals();
    buttons.editMealBtn.disabled = true;
    buttons.addMealBtn.disabled = false;

}

async function addNewMeal(e) {
    e.preventDefault();
    const [food, time, calories] = extractFromInputs(inputs);
    clearInputs(inputs);

    await fetch(issueURL, {
        method: "POST",
        body: JSON.stringify({ food, time, calories })
    });

    await loadAllMeals();
}


async function loadAllMeals(e) {
    if (e) {
        e.preventDefault();
    }

    const meals = await ((await fetch(issueURL)).json());
    otherElements.divListAllMeals.innerHTML = "";

    Object.values(meals).forEach(meal => {
        const divMeal = createElement("div", null, ["meal"], null, otherElements.divListAllMeals);
        createElement("h2", meal.food, [], null, divMeal);
        createElement("h3", meal.time, [], null, divMeal);
        createElement("h3", meal.calories, [], null, divMeal);
        const buttonsDiv = createElement("div", null, ["meal-buttons"], null, divMeal);
        const changeBtn = createElement("button", "Change", ["change-meal"], meal._id, buttonsDiv);
        changeBtn.addEventListener("click", prepareForEdit);
        const deleteBtn = createElement("button", "Delete", ["delete-meal"], meal._id, buttonsDiv);
        deleteBtn.addEventListener("click", deleteMeal);
    });
}

async function deleteMeal(e){
    currId = e.target.id;

    await fetch(`${issueURL}${currId}`, {
        method: "DELETE"
    });

    await loadAllMeals();
}

function prepareForEdit(e){
    const [food, time, calories] = extractFromFields(e);
    inputs.food.value = food;
    inputs.time.value = time;
    inputs.calories.value = calories;

    e.target.parentElement.parentElement.remove();
    buttons.editMealBtn.disabled = false;
    buttons.addMealBtn.disabled = true;
    buttons.editMealBtn.setAttribute("currId",e.target.id);
}

function extractFromFields(e){
    const food = e.target.parentElement.parentElement.querySelector("h2").textContent;
    const time = e.target.parentElement.parentElement.querySelector("h3:nth-child(2)").textContent;
    const calories = e.target.parentElement.parentElement.querySelector("h3:nth-child(3)").textContent;
    return [food, time, calories];
}

function extractFromInputs(inputs) {
    const food = inputs.food.value;
    const time = inputs.time.value;
    const calories = inputs.calories.value;
    return [food, time, calories];
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