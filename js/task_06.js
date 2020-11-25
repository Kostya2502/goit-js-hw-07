const inputRef = document.querySelector('#validation-input')
const num = document.querySelector('[data-length="6"]')

inputRef.addEventListener("blur", event => {
    const users = event.target.value;
    const value = inputRef.dataset.length;
    if (users.length === +value) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    }
    else {
        inputRef.classList.remove("valid");
        inputRef.classList.add("invalid");
    }
})