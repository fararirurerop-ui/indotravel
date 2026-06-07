document.addEventListener("DOMContentLoaded", function () {

    const user = localStorage.getItem("username");
    const registeredUser = localStorage.getItem("registeredUser");

    const userInfo = document.getElementById("userInfo");
    const authArea = document.getElementById("authArea");

    if (user) {

        userInfo.innerText = "Halo, " + user;

        authArea.innerHTML = `
            <button onclick="logout()" class="nav-cta">
                Logout
            </button>
        `;

    } else if (registeredUser) {

        userInfo.innerText = "Belum login";

        authArea.innerHTML = `
            <button onclick="goLogin()" class="nav-cta">
                Login
            </button>
        `;

    } else {

        userInfo.innerText = "";

        authArea.innerHTML = `
            <a href="login/register.html" class="nav-cta">
                Daftar
            </a>
        `;
    }

});

function goLogin() {
    window.location.href = "login/index.html";
}

function logout() {
    localStorage.removeItem("username");
    location.reload();
}
