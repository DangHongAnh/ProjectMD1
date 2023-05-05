

let mainForm = document.getElementById("main-form");

mainForm.onsubmit = function (e) {
  e.preventDefault();
  console.log("Hello world");
    let listUser = JSON.parse(localStorage.getItem("listUser")) || [];
    let isMatched = false; // sửa tên biến để phản ánh ý nghĩa chính xác hơn
    let username = document.querySelector(".userName").value; // lấy giá trị đăng nhập từ input người dùng
    let password = document.querySelector(".password").value;

    for (let i = 0; i < listUser.length; i++) {
      if (username === listUser[i].Name && password === listUser[i].password) {
        isMatched = true; // nếu tìm thấy tài khoản trong danh sách, đặt cờ này thành true và dừng vòng lặp
        localStorage.setItem("loginusers", JSON.stringify(listUser[i]));
        break;
      }
    }

    if (isMatched) {
      console.log(" chuyển trang luôn");
      if (username === "admin" && password === "admin") {
        window.location.href = "/admin.html"; // Chuyển hướng sang trang admin.html nếu đăng nhập bằng tài khoản admin
      } else {
        window.location.href = "/index.html"; // Chuyển hướng sang trang homepage.html nếu đăng nhập thành công bằng tài khoản khác
      }
    } else {
      alert("Đăng nhập không thành công");
    }
};





