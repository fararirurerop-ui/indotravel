var btnRegister = document.getElementById("do-register");
var username = document.getElementById("username");
var password = document.getElementById("password");

    const data = await res.json();

    if (data.status === "success") {
        document.getElementById("message").innerText = "Registrasi berhasil, silakan login";
        window.location.href = "index.html";
    } else {
        document.getElementById("message").innerText = data.message || "Gagal registrasi";
    }
});
