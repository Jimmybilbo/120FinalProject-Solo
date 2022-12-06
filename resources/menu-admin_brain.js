// // ---------- Menu ---------- //
// // laying out the menu item template
// const menuItemTemplate = document.createElement('div');
// menuItemTemplate.innerHTML = `
//     <img src="" alt="" class="menu-pic">
//     <button class="menu-btn">
//         <h3 class="menu-name"></h3>
//     </button>
//     <span class="menu-price"></span>
//     <button class="BTN-ADD" onclick="addItem()" type="button">ADD TO CART</button> `;
// menuItemTemplate.classList.add('menu-item');


function itemListing(name, price, img, desc) {
    const menuItemListing = document.querySelector("#listing")

    menuItemListing.innerHTML += `
        <div class="menu-item">

            <img src="${img}" alt="" class="menu-pic">
            <button class="menu-btn">
                <h3 class="menu-name">${name}</h3>
            </button>
            <span class="menu-price">$${price}</span>
            <button class="menu-btn">
                <h3 class="menu-name">${desc}</h3>
            </button>
            <button class="BTN-ADD" onclick="addItem(['burger', 52.99, 'resources/images/burger-img.png', 1])" type="button">ADD TO CART</button>
            
        </div> `;
    // menuItemListing.classList.add('menu-item');
}

