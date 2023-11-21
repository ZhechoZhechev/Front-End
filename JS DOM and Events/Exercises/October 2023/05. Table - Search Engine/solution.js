function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchValue = document.querySelector("#searchField").value;
      const boxesToSearch = Array.from(document.querySelectorAll("tbody td"));

      if (searchValue) {
         boxesToSearch
            .filter(box => box.textContent.includes(searchValue))
            .forEach(box => box.parentElement.classList.add("select"));
      }

      document.querySelector("#searchBtn").addEventListener("blur", clear);

      function clear() {
         boxesToSearch.forEach(box => box.parentElement.classList.remove("select"));
      }
   }
}