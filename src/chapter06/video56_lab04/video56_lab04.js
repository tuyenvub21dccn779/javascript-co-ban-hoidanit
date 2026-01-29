console.log("video 56 lab 04");

const username = "hoidanit@gmail.com",
  password = "123456";

const usernameInputElement = document.getElementById("username");
const passwordInputElement = document.getElementById("password");
const loginBtnElement = document.getElementById("loginBtn");

loginBtnElement.addEventListener("click", () => {
  usernameInputValue = usernameInputElement.value;
  passwordInputValue = passwordInputElement.value;
  if (usernameInputValue === username && passwordInputValue === password) {
    alert("Đăng nhập thành công!");
    window.location.href = "success.html";
  } else {
    alert("Tài khoản hoặc mật khẩu sai");
    usernameInputElement.style.borderColor = "red";
    passwordInputElement.style.borderColor = "red";
  }
});
