let itemName = document.getElementById("itemName");
let itemPrice = document.getElementById("itemPrice");
let formBtn = document.getElementById("formBtn");
let items = document.getElementById("items");
let conclusion = document.getElementById("conclusion");

let numRegex = /^[0-9]+$/;

// make an array of prices
let pricesArray = [];

function removeItem(e) {
    e.target.parentElement.remove();
}

function addToList() {
    let nameErr = document.getElementById("nameErr");
    let priceErr = document.getElementById("priceErr");
    //check if form is filled properly
    if (itemName.value === "") {
        nameErr.innerHTML = `please, print name of bought item`;
    } else {
        nameErr.innerHTML = "";
    }
    if (itemPrice.value === "" || numRegex.test(itemPrice.value) === false) {
        priceErr.innerHTML = `please, print the price of bought item`;
    } else {
        priceErr.innerHTML = "";
    }
    if (itemName.value !== "" && itemPrice.value !== "" &&
        numRegex.test(itemPrice.value) !== false) {
        let productName = itemName.value;
        let productPrice = itemPrice.value;

        let listItem = document.createElement("li");
        listItem.innerHTML = `<p class="list-item"> <span class="name">${productName}</span> for 
        <span class="price"> ${productPrice}</span> UAH </p>`;
        pricesArray.push(productPrice); //add a price to an array

        let delBtn = document.createElement("p");
        delBtn.innerHTML = `(delete item)`;
        delBtn.classList.add("close");

        items.appendChild(listItem);
        listItem.appendChild(delBtn);
        delBtn.addEventListener("click", removeItem, false);

    }
}
formBtn.addEventListener("click", addToList, false);
