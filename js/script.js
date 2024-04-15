let userInfo = document.querySelector (".user-info")
let user = document.querySelector ("#user")
let links = document.querySelector (".links")

if (localStorage.getItem("username")){
    links.remove()
    userInfo.style.display ="flex"
    user.innerHTML = localStorage.getItem("username")
}
let logOutBtn = document.querySelector("#log-out")
logOutBtn.addEventListener("click", function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    } , 1500)
})

let allProducts = document.querySelector(".products")
let products = [
    {
        id:1,
        title: "Ultra Hand Blender - 600ml",
        color: "silver",
        imageUrl : "images/2_40b7a663-d29a-4098-af7c-72db0d3e6ef1_770x.webp"
    },
    {
        id:2,
        title: "Fresh Hand Blender HP-600 ",
        color: "black",
        imageUrl : "images/3_600x.webp"
    },
    {
        id:3,
        title: "Mixer",
        color: "bink",
        imageUrl : "images/grid-img_600x.webp"
    },
    {
        id:4,
        title: "700W High Speed Premium Blender",
        color: "grey",
        imageUrl : "images/pngtree-food-processor-png-image_13504456.png"
    },
    {
        id:5,
        title: "coffee machine",
        color: "black",
        imageUrl : "images/cfb4839458824ceae1d3aa16e092145d.jpg"
    },
    {
        id:6,
        title: "Kitchen Machine 1200W 6.7liters Blender",
        color: "red",
        imageUrl : "images/pngtree-hyper-realistic-mixer-hand-or-stand-png-image_13504887.png"
    }
]
function drawItems (){
    let y = products.map((item) => {
        return `
        <div class="product_item">
        <img class="product_item_img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
            <h2>${item.title}</h2>
            <span>${item.color}</span>
        </div>
        <div class="product_item_action">
         <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
         <i class="far fa-heart fav"></i>
        </div>
    </div>
        `
    })
    allProducts.innerHTML = y;
}
drawItems ()

let cartProductDiv = document.querySelector(".cart-products div")
let badge = document.querySelector(".badge")

let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];

if(addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}



  if(localStorage.getItem=("username")){
        function addToCart(id){
            let choosenItem = products.find((item) => item.id === id );
            cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;
            

            addedItem = [...addedItem , choosenItem]
            localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
            let cartProductsLength = document.querySelectorAll(".cart-products div p")
            badge.style.display ="block";
            badge.innerHTML = cartProductsLength.length;
        }
    }else {
        window.location ="login.html"
    }



let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartsProducts = document.querySelector(".cart-products")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
     if(cartProductDiv.innerHTML !=""){
         if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
         }else {
            cartsProducts.style.display="block";
         }
     } 
}

