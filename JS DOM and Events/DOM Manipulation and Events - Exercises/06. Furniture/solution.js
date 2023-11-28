function solve() {
  
  let generateButton = document.querySelector("#exercise button:first-of-type");
  generateButton.addEventListener("click", parseFurnitureInfo);

  let checkboxes = Array.from(document.querySelectorAll("input[type=checkbox]"));
  checkboxes.forEach(checkbox => {
    checkbox.disabled = false;
  });

  let buyButton = document.querySelector("#exercise button:last-of-type");
  buyButton.addEventListener("click", displayBoughtFurnitureInfo);

  function displayBoughtFurnitureInfo() {
    let infoArray = [];
    let outputText = (document.querySelector("#exercise textarea:last-of-type"));
    let checkboxes = Array.from(document.querySelectorAll("input[type=checkbox]:checked"));

    checkboxes.map(checkbox => {
      let row = checkbox.parentElement.parentElement;
      let name = row.querySelector("td:nth-of-type(2)").innerText;
      let price = Number(row.querySelector("td:nth-of-type(3)").innerText);
      let decFactor = Number(row.querySelector("td:nth-of-type(4)").innerText);

      infoArray.push({name, price, decFactor});
    })
    let finalInfo = infoArray.reduce((acc, curr) =>{
      acc.names.push(curr.name);
      acc.totalPrice += curr.price;
      acc.averageDecFactor += curr.decFactor / checkboxes.length;
      return acc;
    }, {
      names: [],
      totalPrice: 0,
      averageDecFactor: 0
    })
    outputText.value = `Bought furniture: ${finalInfo.names.join(", ")}\nTotal price: ${finalInfo.totalPrice.toFixed(2)}\nAverage decoration factor: ${finalInfo.averageDecFactor}`
  };

  function parseFurnitureInfo() {
    let inputText = JSON.parse(document.querySelector("#exercise textarea:first-of-type").value);
    let tableBody = document.querySelector("tbody");

    inputText.map(funrinute => {
      let row = document.createElement("tr");

      row.appendChild(createImageBox(funrinute.img));
      row.appendChild(createTextbox(funrinute.name));
      row.appendChild(createTextbox(funrinute.price));
      row.appendChild(createTextbox(funrinute.decFactor));
      row.appendChild(createCheckboxBox());

      return row;
    }).forEach(row => { tableBody.appendChild(row) });
  }

  function createImageBox(src) {
    let imageBox = document.createElement("td");
    let image = document.createElement("img");
    image.src = src;
    imageBox.appendChild(image);

    return imageBox;
  }

  function createTextbox(text) {
    let nameBox = document.createElement("td");
    nameBox.textContent = text;

    return nameBox;
  }

  function createCheckboxBox() {
    let checkboxBox = document.createElement("td");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxBox.appendChild(checkbox);

    return checkboxBox;
  }
}