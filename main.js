const userName = document.getElementById("reg_name");
const userPhone = document.getElementById("reg_phone");
const userEmail = document.getElementById("reg_email");
const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const userNameValue = userName.value.trim();
    const userPhoneValue = userPhone.value.trim();
    const userEmailValue = userEmail.value.trim();

    if (userNameValue === '') {
        alert("User may not leave blank")
        ''
    }
    if (userPhoneValue === '') {
        alert("Phone may not leave blank")
    }
    if (userEmailValue === '') {
        alert("Email may not leave blank")
    }
}