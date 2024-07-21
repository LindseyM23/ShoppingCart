let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', () => {
body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

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

function addToCart(key){
    if(listCards[key]== null){
        listCards[key] = {...products[key],quantity:1}
        } else {
            listCards[key].quantity += 1;
        }
        reloadCart();
}

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

function changeQuantity(key,quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity=quantity;
        
    }
    reloadCart();
}


