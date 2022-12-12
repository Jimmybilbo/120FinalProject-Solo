var itemIndex = 24

function itemListing() {
    itemIndex += 1;

    let location = prompt("Where would you like this listing placed?\n(Entrees[0] / Drinks[1] / Sides[2] / Ingredients[3] / Accessories[4])");
    // validation has can be word or number, word has to be exact match (non case sensitive), number must be 0-4
    let menuItemListing = document.querySelector(`#${location}--section`);

    let img = "NoPhoto_Default.jpg"
    let name = prompt("Product Name");
    // validation has to be only letters

    let dollar = prompt("Product Price");
    // validation has to be only numbers greater than 0 but no more than 4 characters in length
    let price = `${dollar}`

    let desc = prompt("Product Description");
    // any and all... if nothing is input, the description reads -No Description-

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
                <button class="item--button" onclick="itemRemoval('item${itemIndex}')">Remove Item</button>
            </div>
        </div> `;
}

function itemRemoval(clicked) {
    var itemID = document.querySelector(`#${clicked}`);
    itemID.classList.add("hiddenIt");
}