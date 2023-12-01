async function loadRepos() {
   outputDiv = document.querySelector("#res");

   let repos = await fetch("https://api.github.com/users/testnakov/repos");
   let body = await repos.text();

   outputDiv.textContent = body;
}