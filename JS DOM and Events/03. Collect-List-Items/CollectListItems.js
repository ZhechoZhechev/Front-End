function extractText() {
  let li =  Array.from(document.querySelectorAll("li"));

  let liTExt = li.map(li => li.textContent);
  liTExt = liTExt.join("\n");

  document.querySelector("#result").value = liTExt;
}