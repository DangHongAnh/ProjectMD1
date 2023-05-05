let loginUser = JSON.parse(localStorage.getItem("loginusers"));

function renderLoginUser() {
  if (loginUser) {
    document.querySelector("#nav-login").innerHTML = `
      <a href="#"><i class="fa-solid fa-user-group"></i>${loginUser.Name}</a>
      <ul>
      <li><a id="profile" href="#">Profile</a></li>
      <li><a id="logout" href="#">Đăng xuất</a></li>
  </ul>
      `;
  }
}
renderLoginUser();

// Hàm logout,hàm profile
let logout = document.getElementById("logout");
let profile = document.getElementById("profile");
let cart_product = JSON.parse(localStorage.getItem("cart_product"));

logout.addEventListener("click",function(){
  localStorage.removeItem("loginusers");
  localStorage.setItem("cart_product", JSON.stringify([]))
  window.location.reload()
})

profile.addEventListener("click",function(){
  window.location.href = "use.html"; 
})
