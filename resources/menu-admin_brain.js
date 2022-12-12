var itemIndex = 24

function itemListing() {
    itemIndex += 1;

    var locationInput = prompt("Where would you like this listing placed?\nEntrees / Drinks / Sides / Ingredients / Accessories");
    var location = locationInput.toLowerCase();
    // validation has can be word, word has to be exact match (non case sensitive)
    while (location !== "entrees" && location !== "drinks" && location !== "sides" && location !== "ingredients" && location !== "accessories") {
        locationInput = prompt("Invalid Input!\nPlease, enter the category name of where you want this item!\nEntrees / Drinks / Sides / Ingredients / Accessories");
        location = locationInput.toLowerCase();
        if (locationInput === null) { return; }
    }
    if (locationInput === null) { return; }

    let menuItemListing = document.querySelector(`#${location}--section`);
    let img = "NoPhoto_Default.jpg"

    var name = prompt("Product Name");
    // validation has to be only letters
    while (!isNaN(name) || name === null) {
        name = prompt("Invalid Input!\nPlease, enter the name of the product in letters!");
    }

    var price = Number(prompt("Product Price (Whole Dollars Only)"));
    // validation has to be only numbers greater than 0 but no more than 4 characters in length
    while (isNaN(price)) {
        price = Number(prompt("Invalid Input!\nPlease, enter the price of the product in whole dollars!"));
    }

    var desc = prompt("Product Description");
    // any and all... if nothing is input, the description reads -No Description-
    if (desc === "" || desc === null) { desc = "No Description-" }

    menuItemListing.innerHTML += `
        <div class="item" id="item${itemIndex}">
            <img src="resources/Images/ItemImages/${img}" alt="item">
            <div class="item--alignment">
                <p>${name}</p>
                <p>$${price}</p>
            </div>
            <p class="item--description">${desc}</p>
            <div class="button--selection">
                <button class="item--button" id="toCart" onclick="">Add to Cart</button>
                <button class="item--button" id="toRemove" onclick="itemRemoval('item${itemIndex}')">Remove Item</button>
            </div>
        </div> `;
}

function itemRemoval(clicked) {
    var itemID = document.querySelector(`#${clicked}`);
    itemID.classList.add("hiddenIt");
}

function tgl() {
    var t = document.querySelector("#adminMode");
    var addItem = document.querySelector("#toAdd");
    var removeItem = document.querySelectorAll("#toRemove");

    if (t.value === "Admin Mode ON") {
        addItem.classList.add("hiddenIt");
        for (const item of removeItem) { item.classList.add("hiddenIt"); }
        t.value="Admin Mode OFF";
    }
    else if (t.value === "Admin Mode OFF") {
        addItem.classList.remove("hiddenIt");
        for (const item of removeItem) { item.classList.remove("hiddenIt"); }

        t.value="Admin Mode ON";
    }

    // var removeItem = document.getElementById("#toRemove");
}