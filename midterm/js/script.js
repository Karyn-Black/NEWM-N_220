let menu = menu;
let cart = cart;
let no_items = no_items;

const food = [
  { name: "Hamburger", price: "$2.99" },
  { name: "Cheeseburger", price: "$3.99" },
  { name: "Cheese Pizza", price: "$3.99" },
  { name: "Pepperoni Pizza", price: "$4.99" },
  { name: "Sausage Pizza", price: "$4.99" },
  { name: "Caesar Salad", price: "$3.99" },
  { name: "Fries", price: "$1.99" },
  { name: "Onion Rings", price: "$2.49" },
];

console.table([food]);

cart = [food];

for (let i = 0; i < food.length; i++) {
  console.log("For Loop:", food[i]);
  food.innerHTML += "<li>" + food[i] + "</li>";
}
