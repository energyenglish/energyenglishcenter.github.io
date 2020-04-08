const register = document.getElementById('register');
const name = document.getElementById("reg_name");
const phone = document.getElementById("reg_phone");
const diachi = document.getElementById("reg_diachi");
const email = document.getElementById("reg_email");
register.addEventListener('click', addClick);

function addClick() {
    const nameValue = name.value;
    const phoneValue = phone.value;
    const diachiValue = diachi.value;
    const emailValue = email.value;
    const error = [];
    if (!nameValue) {
        error.push('Tài Khoản không được để trống');
    }
    if (!phoneValue) {
        error.push('Số điện thoại không được để trống');
    }
    if (!diachiValue) {
        error.push("Vui lòng nhập địa chỉ");
    }
    if (!emailValue) {
        error.push("Email không được để trống";)
    } else {
        alert("bạn đã đăng ký thành công");
    }

}