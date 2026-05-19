var btnLogin = document.getElementById("do-login");
var username = document.getElementById("username");
var password = document.getElementById("password");

btnLogin.onclick = function () {

  if (username.value === "heri" && password.value === "123") {

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("user", username.value);

    alert("Login berhasil!");

    // balik ke halaman utama
    window.location.href = "../index.html";

  } else {
    alert("Username atau Password salah!");
  }

};
