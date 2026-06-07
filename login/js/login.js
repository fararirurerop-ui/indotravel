
var btnLogin = document.getElementById("do-login");
var username = document.getElementById("username");
var password = document.getElementById("password");

btnLogin.addEventListener("click", function () {

    if (username.value === "heri" && password.value === "123") {

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("user", username.value);

        alert("Login berhasil!");

        // redirect ke halaman utama GitHub Pages
        window.location.href = "https://fararirurerop-ui.github.io/indotravel/";

    } else {

        alert("Username atau Password salah!");

    }

});
