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