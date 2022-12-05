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
        alert("Whoops... too bad so sad.... sucks to suck..... idk, pull up Inspect element or something")
    });

    loginForm.querySelector("#guestLogin").addEventListener("click", e => {
        e.preventDefault();
        lockBox.classList.add("hiddenIt");
        bodyBox.classList.remove("hiddenIt");
    });

    createAccountForm.querySelector("#guestLogin").addEventListener("click", e => {
        e.preventDefault();
        lockBox.classList.add("hiddenIt");
        bodyBox.classList.remove("hiddenIt");
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

        lockBox.classList.add("hiddenIt");
        bodyBox.classList.remove("hiddenIt");
    }
});

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;

    if (email === "admin" && password === "password1") {
        lockBox.classList.add("hiddenIt");
        bodyBox.classList.remove("hiddenIt");
    } else if (email === "PRNDL" && password === "password1") {
        lockBox.classList.add("hiddenIt");
        bodyBox.classList.remove("hiddenIt");
    } else if (email === checkItEmail && password === checkItPass) {
        lockBox.classList.add("hiddenIt");
        bodyBox.classList.remove("hiddenIt");
    } else {
        setFormMessage(loginForm, "Invalid username/password combination");
    }
});