
let getDetails =[];
getDetails.push(JSON.parse(localStorage.getItem("details")))
getDetails.forEach(val => {
    const image=document.querySelectorAll(".pic");
    image.forEach((bg)=>(bg.setAttribute("src", val.image)));
    const title=document.getElementById("name");
    title.textContent=val.name;
    const cost=document.querySelector("#price");
    cost.textContent=` ₹ ${val.price}`;
    const problem=document.querySelector(".problem");
    problem.textContent=val.problem;
    const description=document.querySelector(".product-detailsP");

    description.textContent=val.description;
    const AddToCart=document.querySelector("#bag");


    AddToCart.addEventListener("click",function(){
        addingToCart(val);
      })
 
    const wishBtn=document.querySelector("#wish");
    wishBtn.addEventListener("click",function(){
        wishBtn.classList.toggle("wish");
        console.log("hey")
    })
});

let items = JSON.parse(localStorage.getItem("cartData")) || [];
function addingToCart(val){
   const existingItem = items.find(item => item.name === val.name);
   if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1)+1;
  
   }
   else {
    const currFav = {
      image: val.image,
      name: val.name,
      price: val.price,
      problem: val.problem,
      quantity: 1,
    };
    
    items.push(currFav);
  
}
         
  console.log('hi')
     localStorage.setItem("cartData", JSON.stringify(items));
  }
