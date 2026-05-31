var loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    if (localStorage.getItem("loggedIn") === "true") {

        loginBtn.innerText = "Logout";

        loginBtn.addEventListener("click", function (e) {

            e.preventDefault();

            localStorage.removeItem("loggedIn");
            localStorage.removeItem("user");

            alert("Logout berhasil!");

            location.reload();

        });

    } else {

        loginBtn.innerText = "Login";

        loginBtn.href = "login/index.html";

    }

}
