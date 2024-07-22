// calling all elements from html to javascript 
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

// controls the visibility of the shopping cart, using the event listener on the item cart 
openShopping.addEventListener('click', () => {
body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
// array of objects used inside the initial page and the shopping cart
let products = [
    {
        id:1,
        name: "5 pc Gold and Pearl Butterfly Set",
        image: 'butterfly set.webp',
        price:  2000,
        

    },
    {
        id:2,
        name: "9 pc Gold Ring Set",
        image: "image.png",
        price: 700,
       
    },
    {
        id:3,
        name: "Van Cleef Dupe in Gold and Black",
        image: "van cleef dupe.png",
        price: 1200,
        
    },
    {
        id:4,
        name: "Rose Gold Watch set",
        image: "watch set.png",
        price: 1000,
        
    }
];
// this fucntion is used to iterate hrough the array of products and append them within the list in hmtl
let listCards=[];
function iniApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML=`
        <img src="images/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}

iniApp();
// this function is used to add the items inside the qauntity and also update the quanitity of the product
function addToCart(key){
    if(listCards[key]== null){
        listCards[key] = {...products[key],quantity:1}
        } else {
            listCards[key].quantity += 1;
        }
        reloadCart();
}

// function is responsible for updating and displaying the contents of the shopping cart on the web page.
function reloadCart(){
    listCard.innerHTML = ``;
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key)=>{
        
if(value != null){
    
    let itemTotalPrice = value.price * value.quantity;
    totalPrice += itemTotalPrice;
    count +=value.quantity;

    let newDiv = document.createElement('li');
newDiv.innerHTML=`
</div>
<div> <img src="images/${value.image}"/><?div>
<div >${value.name}</div>
<div class="description">
<div>R${value.price.toLocaleString()}</div>

<div>
<button onclick= "changeQuantity(${key}, ${value.quantity -1 })">-</button>
<div class="count">${value.quantity}</div>
<button onclick= "changeQuantity(${key}, ${value.quantity +1 })">+</button>
</div>

</div>


`;

    listCard.appendChild(newDiv);
}

    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
// function is responsible for updating the quantity of a product in the shopping cart and handling the removal of items if their quantity reaches zero. 
function changeQuantity(key,quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity=quantity;
        
    }
    reloadCart();
}


