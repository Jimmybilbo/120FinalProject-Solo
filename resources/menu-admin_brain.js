var menuItemListing = document.querySelector("#listing")

function itemListing() {
    let img = "resources/Images/ItemImages/NoPhoto_Default.jpg"
    let name = prompt("Product Name");
    // validation has to be only letters

    let dollar = prompt("Product Price");
    // validation has to be only numbers greater than 0 but no more than 4 characters in length
    let price = `${dollar}.00`

    let desc = prompt("Product Description")
    // any and all... if nothing is input, the description reads -No Description-

    menuItemListing.innerHTML += `
        <div class="menu-item">
            <img src="${img}" alt="item">
            <h3>${name}</h3>
            <span>$${price}</span>
            <p>${desc}</p>
        </div> `;
}

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector("#whoops").addEventListener("click", e => {
//         itemListing('resources/Images/ItemImages/NoPhoto_Default.jpg');
//     }); //Creates listing on click endlessly
// });