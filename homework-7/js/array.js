const itemsUlSelect = document.querySelector("#itmes");
const cartUlSelect = document.querySelector("#cart");
const removeBtnSelect = document;

const items = [
    "Apple",
    "Orange",
    "Plum",
    "Pear",
    "Hairy Potato"
];
const cart = [];

function showCart() {
    cart.push
}

function addItemToCart(e) {
    cart.push(e.target.dataset.name);

    console.log(cart);
}

for (let i = 0; i < items.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = items[i];
    itemsUlSelect.innerHTML += "<li>";
    itemsUlSelect.innerHTML += items[i];

    const newBtn = document.createElement("button");
    newBtn.innerText = "+";
    itemsUlSelect.innerHTML += "</li>";
}