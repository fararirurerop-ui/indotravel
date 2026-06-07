document.addEventListener("DOMContentLoaded", function () {

    function goLogin() {
        window.location.href = "login/index.html";
    }

    function logout() {
        localStorage.removeItem("username");
        localStorage.removeItem("user");
        localStorage.removeItem("loggedIn");

        location.reload();
    }

    const user =
        localStorage.getItem("username") ||
        localStorage.getItem("user");

    if (user) {

        const userInfo = document.getElementById("userInfo");
        const authArea = document.getElementById("authArea");

        if (userInfo) {
            userInfo.innerHTML = "Halo, " + user;
        }

        if (authArea) {
            authArea.innerHTML =
                '<button onclick="logout()">Logout</button>';
        }

    }

    window.goLogin = goLogin;
    window.logout = logout;

});
