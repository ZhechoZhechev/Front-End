function solve() {
  let sections = Array.from(document.querySelectorAll("section"));
  let correctAnswers = 0;

  sections.forEach((section, index) => {
    if (index === 0) {
      let elements = Array.from(section.querySelectorAll(".quiz-answer"));
      elements.forEach(element => {
        element.addEventListener("click", function dataIndex(e) {
          let value = Number(e.currentTarget.getAttribute("data-quizIndex"));
          value === 2 ? correctAnswers++ : correctAnswers;
          section.style.display = "none";
          sections[index + 1].style.display = "block";
        });
      });
    } else if (index === 1) {
      let elements = Array.from(section.querySelectorAll(".quiz-answer"));
      elements.forEach(element => {
        element.addEventListener("click", function dataIndex(e) {
          let value = Number(e.currentTarget.getAttribute("data-quizIndex"));
          value === 4 ? correctAnswers++ : correctAnswers;
          section.style.display = "none";
          sections[index + 1].style.display = "block";
        });
      });
    } else if (index === 2) {
      let elements = Array.from(section.querySelectorAll(".quiz-answer"));
      elements.forEach(element => {
        element.addEventListener("click", function dataIndex(e) {
          let value = Number(e.currentTarget.getAttribute("data-quizIndex"));
          value === 2 ? correctAnswers++ : correctAnswers;
          section.style.display = "none";

          let resultUl = section.parentElement.querySelector("#results");
          resultUl.style.display = "block";
          let resultH1 = resultUl.querySelector("h1");

          if (correctAnswers !== 3) {
            resultH1.textContent = `You have ${correctAnswers} right answers`
          } else {
            resultH1.textContent = `You are recognized as top JavaScript fan!`
          }
        });
      });
    }
  });
}
