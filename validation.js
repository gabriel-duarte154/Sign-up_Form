const password = document.querySelector("input#password");
const phone = document.querySelector("input#phone");
const conPassword = document.querySelector("input#confirm-password")
const email = document.querySelector("input#email")

const regex = {
    password: /[\w]{8}/,
    phone: /^[\d]{2}-[\d]{9,20}/,
    email: /[\w]+@[\w]+\.[\w]{2,3}$/
}

function validation (e) {
    let pattern = regex[e.target.id];
    let inputValue = e.target.value;
    let validationText = e.target.previousElementSibling.childNodes[1];

    if (!pattern.test(inputValue) && inputValue) {
        e.target.style.borderColor = "var(--light-pink)"
        validationText.style.display = "block"

    } else {
        e.target.style.borderColor = "#a7a5a5"
        validationText.style.display = "none"
    }
}

password.addEventListener("change", validation);
phone.addEventListener("change", validation);
email.addEventListener("change", validation)


conPassword.addEventListener("change", (e) => {
    let validationText = e.target.previousElementSibling.childNodes[1];
    if (e.target.value && password.value) {
        if (e.target.value != password.value) {
            e.target.style.borderColor = "var(--light-pink)"
            validationText.style.display = "block"
            return
        }
    } 
    e.target.style.borderColor = "#a7a5a5"
    validationText.style.display = "none"
        
});
