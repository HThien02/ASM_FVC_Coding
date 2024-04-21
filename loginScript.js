var btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", function () {
    var email = document.getElementById("email").value;
    console.log("Email:", email);
    var password = document.getElementById("password").value;

    var check = checkLogin(email, password);

    if (check != null) {
        console.log("Login ok!");
        window.location.href = "index.html"; // Chuyển hướng đến trang "index.html"
    } else {
        console.log("Login failed!");
        alert("Invalid email or password");
    }
});


function checkLogin(email, password) {
    for (let i = 0; i < accountData.length; i++) {
        if (accountData[i].email === email && accountData[i].password === password) {
            return accountData[i];
        }
    }
    return null; // Trả về null nếu không tìm thấy tài khoản phù hợp
}
