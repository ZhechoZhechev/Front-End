window.addEventListener("load", solve);

function solve() {
  const addScoreBtn = document.querySelector("#add-btn");
  const sureList = document.querySelector("#sure-list");
  const scoreboardList = document.querySelector("#scoreboard-list");
  const clearBtn = document.querySelector(".btn.clear")

  const inputs = {
    playerName: document.querySelector("#player"),
    score: document.querySelector("#score"),
    round: document.querySelector("#round")
  }

  addScoreBtn.addEventListener("click", addToSureList);
  clearBtn.addEventListener("click", () =>{location.reload();});

  function addToSureList() {
    if (!isAnyInputEmpty(inputs)) {
      let li = createElement("li", null, ["dart-item"], null, sureList);
      let article = createElement("article", null, [], null, li);
      createElement("p", inputs.playerName.value, [], null, article);
      let score = `Score: ${inputs.score.value}`;
      createElement("p", score, [], null, article);
      let round = `Round: ${inputs.round.value}`;
      createElement("p", round, [], null, article);
      let editBtn = createElement("button", "edit", ["btn", "edit"], null, li);
      editBtn.addEventListener("click", fillEditForm);
      let okBtn = createElement("button", "ok", ["btn", "ok"], null, li);
      okBtn.addEventListener("click", addToScoreboard);
      addScoreBtn.disabled = true;
      clearInputs(inputs);
    }
  }
  function addToScoreboard(e){
    const [playerToInput, scoreToInput, roundToInput] = extractInputsValues(e);
    let li = createElement("li", null, ["dart-item"], null, scoreboardList);
    let article = createElement("article", null, [], null, li);
    createElement("p", playerToInput, [], null, article);
    let score = `Score: ${scoreToInput}`;
    createElement("p", score, [], null, article);
    let round = `Round: ${roundToInput}`;
    createElement("p", round, [], null, article);
    e.target.parentElement.remove();
    addScoreBtn.disabled = false;
  }

  function fillEditForm(e) {
    const [playerToInput, scoreToInput, roundToInput] = extractInputsValues(e);

    inputs.playerName.value = playerToInput;
    inputs.score.value = scoreToInput;
    inputs.round.value = roundToInput;

    e.target.parentElement.remove();
    addScoreBtn.disabled = false;
  }

  function extractInputsValues(e) {
    let playerToInput = e.target.parentElement.querySelector("article p:first-child").textContent;
    let scoreToInput = e.target.parentElement.querySelector("article p:nth-child(2)").textContent;
    scoreToInput = scoreToInput.split("Score: ")[1];
    let roundToInput = e.target.parentElement.querySelector("article p:nth-child(3)").textContent;
    roundToInput = roundToInput.split("Round: ")[1];
    return [playerToInput, scoreToInput, roundToInput];
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

  function isAnyInputEmpty(inputs) {
    for (const key in inputs) {
      if (!inputs[key].value) {
        return true;
      }
      return false;
    }
  }
}
