let homeProduct = JSON.parse(localStorage.getItem("listProduct"));

//render
let productHome = document.querySelector(".box-homne");
console.log(productHome.innerHTML);
function renderproductHome(e) {
  productHome.innerHTML = "";
  for (let i = 0; i < homeProduct.length; i++) {
    productHome.innerHTML =
      productHome.innerHTML +
      `
      <div class="col-md-4 col-xs-6 ">
      <div class="product">
        <div class="product-img">
        <img src="${homeProduct[i].img}" alt="" />
    
        </div>
        <div class="product-body">
          <p class="product-category">Category</p>
          <h3 class="product-name"><a href="#">${homeProduct[i].name}</a></h3>
          <h4 class="product-price">
          $<span class="product-old-price">${homeProduct[i].price}</span>
          </h4>
        </div>
        <div class="add-to-cart">
          <button class="add-to-cart-btn" onclick="addCart(${homeProduct[i].id})">
            <i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
        `;
  }
}
renderproductHome();

// them vao gio hang
//Lấy ra giá trị id của sản phẩm
let addToCart = document.querySelector(".add-to-cart-btn");

function addCart(e) {
  let id = e;
  console.log(id);
  //Lấy ra userId của người dùng 
  let userId = getUserId();
  //Tìm kiếm giỏ hàng của người dùng trong local storage
  let cartItem = JSON.parse(localStorage.getItem("cart_product_" + userId)) || [];
  //Thiết lập biến cart là false để lưu trữ thông tin 
  let cart = false;
//Tìm kiếm sản phẩm có id tương ứng trong mảng 
  for (let i = 0; i < homeProduct.length; i++) {
    if (homeProduct[i].id === id) {
      cart = homeProduct[i];
      break;
    }
  }

  if (cart) {
    let alreadyInCart = false;
    for (let i = 0; i < cartItem.length; i++) {
      if (cartItem[i].id === cart.id) {
        // kiểm tra xem mặt hàng đã có trong giỏ hàng của người dùng hiện tại chưa
        alreadyInCart = true;
        break;
      }
    }

    if (alreadyInCart) {
      alert("Đã có trong giỏ hàng.");
    } else {
      cartItem.push(cart);
      alert("Đã thêm vào giỏ hàng.");
      localStorage.setItem("cart_product_" + userId, JSON.stringify(cartItem));
    }
  }
}
function getUserId() {
  // kiểm tra xem ID người dùng đã được lưu trữ trong bộ lưu trữ phiên chưa
  let userId = JSON.parse(localStorage.getItem("loginusers"));

  if (!userId) {
    // nếu ID người dùng không được lưu trữ, hãy chuyển hướng người dùng đến trang đăng nhập
    window.location.href="./dangnhap.html"; // thay thế bằng URL trang đăng nhập của bạn
  }

  return userId.Name;
}

