var loginForm =
document.getElementById("loginForm");

loginForm.addEventListener(
"submit",
function(e){

    e.preventDefault();

    const username =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    const userData =
    localStorage.getItem(username);

    if(!userData){

        alert("User tidak ditemukan");
        return;
    }

    const user =
    JSON.parse(userData);

    if(user.password === password){

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        localStorage.setItem(
            "currentUser",
            username
        );

        alert("Login berhasil");

        window.location.href =
        "https://fararirurerop-ui.github.io/indotravel/";

    }
    else{

        alert("Password salah");
    }

});
