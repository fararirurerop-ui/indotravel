document
.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const username =
    document.getElementById("username").value;


    const password =
    document.getElementById("password").value;

    if(localStorage.getItem(username)){

        alert("Username sudah digunakan");
        return;
    }

    const user = {
        username,
        password
    };

    localStorage.setItem(
        username,
        JSON.stringify(user)
    );

    alert("Registrasi berhasil");

    window.location.href = "index.html";

});
