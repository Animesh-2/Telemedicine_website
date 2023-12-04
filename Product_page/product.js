
let url = `https://backend-v7c7.onrender.com/`;
let urlProduct = `https://backend-v7c7.onrender.com/products`;


let mainSection = document.getElementById("right");
let paginationWrapper = document.getElementById("pagination-wrapper");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let liquid = document.getElementById("liquid");
let soap = document.getElementById("soap");
let tablet = document.getElementById("tablet");
let cream = document.getElementById("cream");
let syrup = document.getElementById("syrup");
let acidity = document.getElementById("acidity");
let immunity = document.getElementById("immunity");
let diabetes = document.getElementById("diabetes");

liquid.addEventListener("click",()=>{
    fetchData(`${urlProduct}?_page=1&_limit=6`,`product_form=liquid`)
})

tablet.addEventListener("click",()=>{
    fetchData(`${urlProduct}?_page=1&_limit=6`,`product_form=tablets`)
})

cream.addEventListener("click",()=>{
    fetchData(`${urlProduct}`,`product_form=cream`)
})

syrup.addEventListener("click",()=>{
    fetchData(`${urlProduct}`,`product_form=strips`)
})

acidity.addEventListener("click",()=>{
    fetchData(`${urlProduct}?`,`problem=Acidity`)
})

immunity.addEventListener("click",()=>{
    fetchData(`${urlProduct}?`,`problem=Immunity`)
})

diabetes.addEventListener("click",()=>{
    fetchData(`${urlProduct}?`,`problem=Diabetes`)
})

soap.addEventListener("click",()=>{
    fetchData(`${urlProduct}?`,`product_form=soap`)
})


sortAtoZBtn.addEventListener("click",()=>{
  fetchData(`${urlProduct}`,`_sort=price&_order=asc`);
  })
  sortZtoABtn.addEventListener("click",()=>{
    fetchData(`${urlProduct}`,`_sort=price&_order=desc`);
  })

  
  
async function fetchData(url,queryParamString=""){
    try{
   
    let res = await fetch (`${url}?_page=1&_limit=6&${queryParamString}`)
    
    let total =(res.headers.get("X-Total-Count"))
  console.log(total)
  let limit =6;
  let totalpage=Math.ceil(total/limit);
  console.log(totalpage)
  let data = await res.json();
  
  displayData(data);
  console.log(data)
    

    paginationWrapper.innerText="";
  
    pagination(totalpage,queryParamString)
    }
  
   catch(err){
   console.log(err);
   }
   }
  
  
  fetchData(`${urlProduct}`);
  
  
  function pagination(totalpage,queryParamString){
    for(let i =1;i<=totalpage;i++){
      let btn =document.createElement("button");
      btn.innerText=i;
      btn.className = "pagination-button";

      btn.addEventListener("click",()=>{
        fetchData(`${urlProduct}?_page=${i}&_limit=6`,queryParamString)
      })
      paginationWrapper.append(btn)
      }
  
  }

  
   function displayData(data){
   mainSection.innerHTML="";
    
 
 
   let outer = document.createElement("div");
   outer.setAttribute("class","card-list");
  
  data.map((item)=>{
  
   

    let card = document.createElement("div");
    card.setAttribute("class","card");
    
  
    let cardImg = document.createElement("div");
    cardImg.setAttribute("class","card-img");
  
    let image = document.createElement("img");
    image.setAttribute("id","photo")
    image.setAttribute("alt","art");
    image.src = `${item.image}`;
  
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body");
  
    let h5 = document.createElement("h5");
    h5.setAttribute("class","card-title");
    h5.textContent = ` ${item.name}`;
  
  
    let cprice = document.createElement("p");
    cprice.setAttribute("class","card-price");
    cprice.textContent = `Rs. ${item.price}`;
  
    
  
    let a = document.createElement("button");
    a.setAttribute("class","card-link");
    
   
    a.textContent = "Add To Cart";
    a.addEventListener("click",()=>{
        addToCart(item);
    })
  
 
    cardImg.append(image);
    cardBody.append(h5,cprice,a);
    card.append(cardImg,cardBody);
    outer.append(card);
    cardImg.addEventListener("click",()=>{details(item)});
    mainSection.append(outer);
    
  
  })

}
function details(ele)
{
    localStorage.setItem("details",JSON.stringify(ele))
    window.location.assign("./product_details/details.html")
}

   var items = JSON.parse(localStorage.getItem('cartData')) || []

function addToCart(val){
    const existingItem = items.find(item => item.name === val.name);
 if (existingItem) {
  existingItem.quantity = (existingItem.quantity || 1) + 1;
 }
 else {
  const currFav = {
    image: val.image,
    name: val.name,
    price: val.price,
    problem:val.problem, 
    quantity: 1, 
  };
  
  items.push(currFav);

}
    localStorage.setItem("cartData", JSON.stringify(items))
    console.log(val)
}






