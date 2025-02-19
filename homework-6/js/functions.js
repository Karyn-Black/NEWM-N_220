function letsGo () {
    console.log("FUNction Time!");

}

letsGo();


function calculateTotal(itmePrice, taxRate = 0.07, discountRate = 0.1) {
    switch (groupsByTwenty) {
        case 0:
            return "? + No discount";
        case 1:
            return "? + Small discount";
        case 2:
            return "? + Slight discount";
        case 3:
            return "? + Large discount";
        default:
            return "? + Huge discount";
    }

    if (itmePrice > 100) {
        return itmePrice * (1 + taxRate) * (1 - discountRate * 2);
    } else if (itmePrice > 50) {
        return itmePrice * (1 + taxRate) * (1 - discountRate);
    } else {
        return itmePrice * (1 + taxRate);
    }
} 

console.log(
    "Kidney = $20, Tax Rate = 40%:",
    calculateTotal(20, 0.4)
);

const items = [18, 24, 17, 3];

function showItems() {
    const newSection = document.createElement("section");
    newSection.innerHTML = "<h4> Items <h4>";

    let total = 0;

    for(let i = 0, i < items.length; i++) {
        newSection.innerHTML += "<p>$" + items[i] + "</p>";
        total += items[i];
    }

    newSection.innerHTML += "hr />"

    newSection.innerHTML += "<p>$" + calculateTotal(total, 0.07) + "</p>";

    document.body.appendChild(newSection);
}

showItems();
