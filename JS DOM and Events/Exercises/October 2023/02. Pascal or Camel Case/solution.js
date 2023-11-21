function solve() {
  let text = document.querySelector("#text").value.split(" ");
  let command = document.querySelector("#naming-convention").value;

  let result;

  switch (command) {
    case "Camel Case":
      result = text.map((word, index) =>
        index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      ).join('');
      break;

    case "Pascal Case":
      result = text.map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      ).join('');
      break;

    default:
      result = "Error!";
  }

  document.querySelector("#result").textContent = result;
}