// ---------- Menu ---------- //
// laying out the menu item template
const menuItemTemplate = document.createElement('div');
menuItemTemplate.innerHTML = `
    <img src="" alt="" class="menu-pic">
    <button class="menu-btn">
        <h3 class="menu-name"></h3>
    </button>
    <span class="menu-price"></span>
    <button class="BTN-ADD" onclick="addItem()" type="button">ADD TO CART</button> `;
menuItemTemplate.classList.add('menu-item');