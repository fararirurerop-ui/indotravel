var btnLogin = document.getElementById("do-login");
var username = document.getElementById("username");
var password = document.getElementById("password");

btnLogin.onclick = function () {
  if (username.value === "heri" && password.value === "123") {
    localStorage.setItem("loggedIn", "true");

    alert("Login berhasil!");

    window.location.href = "https://fararirurerop-ui.github.io/indotravel/";
  } else {
    alert("Username atau Password salah!");
  }
};
