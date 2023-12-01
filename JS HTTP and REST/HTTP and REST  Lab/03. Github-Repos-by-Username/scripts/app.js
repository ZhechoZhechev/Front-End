async function loadRepos() {
	let userName = document.querySelector("#username").value;
	const list = document.querySelector("#repos");

	list.innerHTML = "";
	
	let repos = await fetch(`https://api.github.com/users/${userName}/repos`);
	let reposJson = await repos.json();

	if (reposJson.message) {
		list.appendChild(createEl(reposJson.message, reposJson.documentation_url));
		return
	}

	reposJson.forEach(repo => {
		list.appendChild(createEl(repo.full_name, repo.html_url));
	});

	function createEl(text, link){
		let li = document.createElement("li");
		let a = document.createElement("a");
		a.textContent = text;
		a.href = link;
		li.appendChild(a);

		return li;
	}
}

