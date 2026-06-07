window.onload = function () {

    let registered = localStorage.getItem("registered");
    let loggedIn = localStorage.getItem("loggedIn");
    let user = localStorage.getItem("user");

    let userInfo = document.getElementById("userInfo");
    let authArea = document.getElementById("authArea");

    if (loggedIn === "true" && user) {

        userInfo.innerHTML = "Halo, " + user;

        authArea.innerHTML = `
            <button onclick="logout()">Logout</button>
        `;

    } else if (registered === "true") {

        userInfo.innerHTML = "Belum login";

        authArea.innerHTML = `
            <button onclick="goLogin()">Login</button>
        `;

    } else {

        userInfo.innerHTML = "";

        authArea.innerHTML = `
            <a href="login/register.html">
                <button>Daftar</button>
            </a>
        `;
    }
};

function goLogin() {
    window.location.href = "login/index.html";
}

function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");
    location.reload();
}
