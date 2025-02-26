const h1Select = document.querySelector("h1");
const nameSelect = document.querySelector("#name");
const sizeSelect = document.querySelector("#size");

function changeH1Style () {
    if (h1Select.style.backgroundColor !== "red") {
        h1Select.style.backgroundColor = "red";
    } else {
        h1Select.style.backgroundColor = "white";
    }
    
}

function changeH1Color() {
    console.log(e.target.value);
    h1Select.style.color = e.target.value;
}

function changeH1Size(e) {
    const fontSize = Number(e.target.value);
    if (fontSize >= 8) {
        h1Select.style.fontSize = fontSize + "px";
    } else {
        e.target.value = 8;
        h1Select.style.fontSize = "8px";
    }
    
}

function cleanUpH1Size(e) {
    const fontSize = Number(e.target.value);
    if (fontSize < 8) {
        e.target.value = 8;
        h1Select.style.fontSize = "8px";
    } 
}

h1Select.onclick = changeH1Style;

nameSelect.onchange = changeH1Color;

sizeSelect.oninput = changeH1Size;
sizeSelect.onchange = cleanUpH1Size;
