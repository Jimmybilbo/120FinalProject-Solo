// Header footer Script
window.onscroll = function() { addSticky() };

function addSticky() {
    var nav = document.getElementById("navSection");
    var sticky = nav.offsetTop;

    if (window.pageYOffset > sticky) {
        nav.classList.add("nav--sticky");
        // nav.classList.remove("nav--transparent");
    }
    else {
        nav.classList.remove("nav--sticky");
        // nav.classList.add("nav--transparent");
    }
}

// Login signup Script
function setFormMessage(formElement, message) {
    const messageElement = formElement.querySelector(".form__message--error");
    messageElement.textContent = message;
};

function setInputError(inputElement, message) {
    inputElement.classList.add("form__message--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

var loginForm = document.querySelector("#login");
var createAccountForm = document.querySelector("#createAccount");
var lockBox = document.querySelector("#loginSection");
var bodyBox = document.querySelector("#bodySection");

var subFName;
var subLName;
var subEmail;
var signPass;
var conPass;

var checkItEmail = localStorage.getItem("email");
var checkItPass = localStorage.getItem("password");

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("hiddenIt");
        createAccountForm.classList.remove("hiddenIt");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("hiddenIt");
        createAccountForm.classList.add("hiddenIt");
    });

    document.querySelector("#whoops").addEventListener("click", e => {
        e.preventDefault();
        alert("Whoops...\nToo bad so sad...\nSucks to suck...\nIdk, pull up inspect element or something...\nOr just keep crying...")
    });

    loginForm.querySelector("#guestLogin").addEventListener("click", e => {
        e.preventDefault();
        lockBox.classList.replace("background", "hiddenIt");
        bodyBox.classList.replace("hiddenIt", "body__container");
    });

    createAccountForm.querySelector("#guestLogin").addEventListener("click", e => {
        e.preventDefault();
        lockBox.classList.replace("background", "hiddenIt");
        bodyBox.classList.replace("hiddenIt", "body__container");

    });
});

document.querySelectorAll(".form__input").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        subFName = document.querySelector("#signupNameF").value; 
        subLName = document.querySelector("#signupNameL").value; 
        subEmail = document.querySelector("#signupEmail").value;
        signPass = document.querySelector("#signupPassword").value;
        conPass = document.querySelector("#confirmPassword").value;

        if (e.target.id === "signupNameF" && e.target.value.length === 0 || e.target.id === "signupNameL" && e.target.value.length === 0 || e.target.id === "signupEmail" && e.target.value.length === 0) { setInputError(inputElement, "Field must be filled out"); };
        if (e.target.id === "signupPassword" && e.target.value.length <= 14) { setInputError(inputElement, "Password must be at least 15 characters"); };
        if (e.target.id === "confirmPassword" && signPass !== conPass) { setInputError(inputElement, "Password does not match"); };
    });
    
    inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
    });
});

createAccountForm.addEventListener("submit", e => {
    e.preventDefault();
    if (subFName.length === 0 || subLName === 0 || subEmail === 0 || signPass.length <= 14 || signPass !== conPass) {
        setFormMessage(createAccountForm, "Invalid Submission");
    } else {
        localStorage.setItem("firstname", subFName);
        localStorage.setItem("firstname", subFName);
        localStorage.setItem("lastname", subLName);
        localStorage.setItem("email", subEmail);
        localStorage.setItem("password", conPass);

        document.querySelector("#signupNameF").value = ""; 
        document.querySelector("#signupNameL").value = ""; 
        document.querySelector("#signupEmail").value = "";
        document.querySelector("#signupPassword").value = "";
        document.querySelector("#confirmPassword").value = "";

        lockBox.classList.replace("background", "hiddenIt");
        bodyBox.classList.replace("hiddenIt", "body__container");

    }
});

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;

    if (email === "admin@email.com" && password === "password1") {
        lockBox.classList.replace("background", "hiddenIt");
        bodyBox.classList.replace("hiddenIt", "body__container");
    } else if (email === "jimmybilbo@email.com" && password === "password1") {
        lockBox.classList.replace("background", "hiddenIt");
        bodyBox.classList.replace("hiddenIt", "body__container");
    } else if (email === checkItEmail && password === checkItPass) {
        lockBox.classList.replace("background", "hiddenIt");
        bodyBox.classList.replace("hiddenIt", "body__container");
    } else {
        setFormMessage(loginForm, "Invalid username/password combination");
    }
});

// Menu admin Script
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
}