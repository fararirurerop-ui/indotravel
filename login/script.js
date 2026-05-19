var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
btnLogin.onclick = function(){
  idLogin.innerHTML = '<p>We\'re happy to see you again, </p><h1>' +username.value+ '</h1>';

  // ambil element dari HTML
var btnLogin = document.getElementById("do-login");
var username = document.getElementById("username");
var password = document.getElementById("password");

// saat tombol login ditekan
btnLogin.onclick = function () {

  // cek username dan password
  if (username.value === "heri" && password.value === "123") {

    // simpan status login ke localStorage
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("user", username.value);

    alert("Login berhasil!");

    // pindah ke halaman utama (index.html utama)
    window.location.href = "../index.html";

  } else {
    alert("Username atau Password salah!");
  }
};
}
