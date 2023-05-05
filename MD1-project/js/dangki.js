function validateRegister() {
 
  //.value-lấy dữ liệu nngười dùng nhập vào ở ô input
  let userName = document.getElementById("username").value;
  let email = document.getElementById("email").value;
 
  let address = document.getElementById("address").value;
  let password = document.getElementById("password").value;
 
  if (
    userName == "" ||
    email == "" ||
  
    address == "" ||
    password == ""
  ) {
    alert ("Không được để trống")
  }else if ( !validateEmail(email)){
    alert ("Email không hợp lệ!")
  }
  else {
    let listUser = JSON.parse(localStorage.getItem("listUser")) || [];
    let isDuplicate = false;
    for (let i = 0; i < listUser.length; i++) {
      if (userName == listUser[i].Name || email == listUser[i].Email) {
        alert("Tài khoản đăng nhập đã được sử dụng");
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      alert("Đăng kí thành công");
      let newUser = { Name: userName, Email: email, address: address, password: password };
      listUser.push(newUser);
      localStorage.setItem("listUser", JSON.stringify(listUser));
    }
}


// validateRegister() 
// Hàm check email  
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}