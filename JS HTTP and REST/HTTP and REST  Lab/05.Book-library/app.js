const loadBooksBtn = document.querySelector("#loadBooks");
const submitBtn = document.querySelector("#form button");
const tableBody = document.querySelector("tbody");

loadBooksBtn.addEventListener("click", displayBooks);
submitBtn.addEventListener("click", handleButtonClick);
tableBody.addEventListener("click", handleButtonClick);


function handleButtonClick(e) {
  const target = e.target;

  if (target.tagName === "BUTTON" && target.textContent === "Delete") {
    deleteBook(target);
  } else if (target.tagName === "BUTTON" && target.textContent === "Edit"){
    updateBook(target);
  } else if (target.tagName === "BUTTON" && target.textContent === "Submit"){
    saveBook();
  } else if (target.tagName === "BUTTON" && target.textContent === "Save") {
    saveNewBookinfo(target);
  }
}

async function updateBook(e) {
  changeToUpdateForm();
  fillInUpdateForm(e);
}

async function saveNewBookinfo(e){
  const bookId = e.dataset.id;
  const titleEl = document.querySelector("input[name=title]");
  const authorEl = document.querySelector("input[name=author]");
  const title = titleEl.value;
  const author = authorEl.value;

  await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
    method: "PUT",
    body: JSON.stringify({ title, author })
  })

  clearInputs(titleEl, authorEl);
  displayBooks();
}

async function deleteBook(e) {
  const bookId = e.dataset.id;

  await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
    method: "DELETE"
  })
  displayBooks();
}

function saveBook() {
  const titleEl = document.querySelector("input[name=title]");
  const authorEl = document.querySelector("input[name=author]");

  const title = titleEl.value;
  const author = authorEl.value;


  if (!title || !author) {
    return;
  }

  fetch("http://localhost:3030/jsonstore/collections/books", {
    method: "POST",
    body: JSON.stringify({ title, author })
  });

  clearInputs(titleEl, authorEl);
  displayBooks();
}

function fillInUpdateForm(target) {
  const title =
  target.parentElement.parentElement.querySelector(
      "td:first-child"
    ).textContent;
  const author =
  target.parentElement.parentElement.querySelector(
      "td:nth-child(2)"
    ).textContent;

  document.querySelector('#form input[name="title"]').value = title;
  document.querySelector('#form input[name="author"]').value = author;
  document
    .querySelector("#form button")
    .setAttribute("data-id", target.dataset.id);
}

function changeToUpdateForm() {
  let h3 = document.querySelector("#form h3");
  h3.textContent = "Edit FORM";
  let submitBtn = document.querySelector("#form button");
  submitBtn.textContent = "Save";
}

function clearInputs(titleInput, authorInput) {
  titleInput.value = "";
  authorInput.value = "";
}

async function displayBooks() {
  tableBody.innerHTML = "";
  let info = await fetch("http://localhost:3030/jsonstore/collections/books");
  let booksInfo = await info.json();

  Object.entries(booksInfo).map(([id, book]) => {
    tableBody.appendChild(createTableRow(id, book));
  });
}

function createTableRow(id, book) {
  let row = document.createElement("tr");
  let titelBox = document.createElement("td");
  titelBox.textContent = book.title;
  let authorBox = document.createElement("td");
  authorBox.textContent = book.author;
  let buttnosBox = document.createElement("td");
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.setAttribute("data-id", id)
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("data-id", id)
  buttnosBox.appendChild(editBtn);
  buttnosBox.appendChild(deleteBtn);

  row.appendChild(titelBox);
  row.appendChild(authorBox);
  row.appendChild(buttnosBox);

  return row;
}
