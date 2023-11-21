function search() {
   const searchValue = document.querySelector("#searchText").value;
   const lis = Array.from(document.querySelectorAll("li"));
   let div = document.querySelector("#result");


   const result = lis.filter(el => el.textContent.includes(searchValue));

   if (searchValue) {
      result.forEach(li => {
         li.style.textDecoration = "underline";
         li.style.fontWeight = "bold";
      })

      div.textContent = `${result.length} matches found`
   }
   
   document.querySelector("button").addEventListener("blur", clear);

   function clear() {
      lis.forEach(li =>{
         li.style.textDecoration = "";
         li.style.fontWeight = "";
      })
      div.textContent = "";
   }

}
