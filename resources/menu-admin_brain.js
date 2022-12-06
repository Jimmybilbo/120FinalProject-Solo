function itemListing(name, price, img, desc) {
    const menuItemListing = document.querySelector("#listing")

    menuItemListing.innerHTML += `
        <div class="menu-item">
            <img src="${img}" alt="" class="menu-pic">
            <h3 class="menu-name">${name}</h3>
            <span class="menu-price">$${price}</span>
            <p>${desc}</p>
        </div> `;
}

// nested array that holds all the listings... each category is hidden and must be revealed by sending a number 1-5 for what should be displayed