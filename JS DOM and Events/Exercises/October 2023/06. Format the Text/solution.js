function solve() {
  const text = document.querySelector("#input").value.split(".").filter(x => x !== "");
  const container = document.querySelector("#output");

  while (text.length > 0) {
    let p = document.createElement("p");
    p.textContent = text
      .splice(0, 3)
      .join(". ") + ".";

      container.appendChild(p);
  }
}