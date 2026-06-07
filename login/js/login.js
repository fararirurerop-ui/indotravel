document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    });

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
