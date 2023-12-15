window.addEventListener("load", solve);

function solve() {
  const nextBtn = document.querySelector("#next-btn");
  const previewUl = document.querySelector("#preview-list");
  const candidatesUl = document.querySelector("#candidates-list");

  const inputs = {
    student: document.querySelector("#student"),
    university: document.querySelector("#university"),
    score: document.querySelector("#score")
  }

  nextBtn.addEventListener("click", moveInfoToPreview);

  function moveInfoToPreview() {
    if (!isAnyInputEmpty(inputs)) {
      const li = createElement("li", null, ["application"], null, previewUl);
      const article = createElement("article", null, [], null, li);
      createElement("h4", inputs.student.value, [], null, article);
      createElement("p", `University: ${inputs.university.value}`, [], null, article);
      createElement("p", `Score: ${inputs.score.value}`, [], null, article);
      const editBtn = createElement("button", "edit", ["action-btn", "edit"], null, li);
      editBtn.addEventListener("click", fillUpdateForm);
      const applyBtn = createElement("button", "apply", ["action-btn", "apply"], null, li);
      applyBtn.addEventListener("click", applyForScholarship)

      nextBtn.disabled = true;
      clearInputs(inputs);
    }
  }

  function applyForScholarship(e) {
    const [student, university, score] = extractInfoFromPreview(e);

    const li = createElement("li", null, ["application"], null, candidatesUl);
    const article = createElement("article", null, [], null, li);
    createElement("h4", student, [], null, article);
    createElement("p", `University: ${university}`, [], null, article);
    createElement("p", `Score: ${score}`, [], null, article);

    e.target.parentElement.remove();
    nextBtn.disabled = false;
  }

  function fillUpdateForm(e) {
    const [student, university, score] = extractInfoFromPreview(e);
    inputs.student.value = student;
    inputs.university.value = university;
    inputs.score.value = score;

    e.target.parentElement.remove();
    nextBtn.disabled = false;
  }

  function extractInfoFromPreview(e) {
    const liAplication = e.target.parentElement;
    let student = liAplication.querySelector("article h4").textContent;
    let university = liAplication.querySelector("article p:nth-child(2)").textContent;
    university = university.split("University: ")[1];
    let score = liAplication.querySelector("article p:nth-child(3)").textContent;
    score = score.split("Score: ")[1];

    return [student, university, score];
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


  function isAnyInputEmpty(inputs) {
    for (const key in inputs) {
      if (!inputs[key].value) {
        return true;
      }
    }
    return false;
  }

  function clearInputs(inputs) {
    for (const key in inputs) {
      inputs[key].value = "";
    }
  }

}
