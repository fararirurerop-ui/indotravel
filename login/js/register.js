var btnRegister = document.getElementById("do-register");

btnRegister.addEventListener("click", function () {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("registeredUser", username);
    localStorage.setItem("registeredPassword", password);
    localStorage.setItem("registered", "true");

    alert("Pendaftaran berhasil!");

    window.location.href = "../index.html";

});
