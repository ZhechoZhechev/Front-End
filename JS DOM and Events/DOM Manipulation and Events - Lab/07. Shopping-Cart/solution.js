function solve() {
   let buttons = Array.from(document.querySelectorAll(".add-product"));
   let output = document.querySelector("textarea");
   let checkoutButton = document.querySelector(".checkout");
   let result = [];

   buttons.forEach(button => {
      button.addEventListener("click", function addDetails(){

         let productName = button.parentElement.parentElement.querySelector(".product-title").textContent;
         let productPrice = Number(button.parentElement.parentElement.querySelector(".product-line-price").textContent)
         let product = {productName, productPrice};
         result.push(product);

         output.value = result.map(product => `Added ${product.productName} for ${product.productPrice.toFixed(2)} to the cart.`).join('\n');
      });
   });

   checkoutButton.addEventListener("click", function displaySum(){
      let buttons = Array.from(document.querySelectorAll("button"));
      buttons.forEach(button =>{
         button.disabled = true;
      })

      let products = new Set();

      result.forEach(pr => {
         let prName = pr.productName;
         products.add(prName);
      });
      let sum = result.reduce((acc, curr) =>{
         acc += curr.productPrice;
         return acc;
      }, 0);
      
      output.value += `\nYou bought ${Array.from(products).join(", ")} for ${sum.toFixed(2)}.`;
   });
}