let homeBike = JSON.parse(localStorage.getItem("listBikeElectronic"));
console.log(homeBike);

//render
let productBike = document.querySelector(".box-homne2");
console.log(productBike.innerHTML);
function renderproductHome(e) {
  productBike.innerHTML = "";
  for (let i = 0; i < homeBike.length; i++) {
    productBike.innerHTML =
      productBike.innerHTML +
      `
      <div class="col-md-4 col-xs-6 ">
      <div class="product">
        <div class="product-img">
        <img src="${homeBike[i].img}" alt="" />
    
        </div>
        <div class="product-body">
          <p class="product-category">Category</p>
          <h3 class="product-name"><a href="#">${homeBike[i].name}</a></h3>
          <h4 class="product-price">
          $<span class="product-old-price">${homeBike[i].price}</span>
          </h4>
        </div>
        <div class="add-to-cart">
          <button class="add-to-cart-btn" onclick="addCart(${homeBike[i].id})">
            <i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
        `;
  }
}
renderproductHome();

// thêm vào giỏ hàng
////Lấy ra giá trị id của sản phẩm
let addToCart = document.querySelector(".add-to-cart-btn");

function addCart(e) {
  let id = e;
  console.log(id);
  let currentUser = getUserId(); //Lấy ra userId của người dùng 
  //Tìm kiếm giỏ hàng của người dùng trong local storage
  let cartItem = JSON.parse(localStorage.getItem(`cart_product_${currentUser}`)) || [];
  ////Thiết lập biến cart là false để lưu trữ thông tin 
  let cart = false;
  // Tìm kiếm sản phẩm có id tương ứng trong mảng 
  for (let i = 0; i < homeBike.length; i++) {
    if (homeBike[i].id === id) {
      homeBike[i].id += "e";
      cart = homeBike[i];
      break;
    }
  }

  if (cart) {
    let alreadyInCart = false;
    for (let i = 0; i < cartItem.length; i++) {
      if (cartItem[i].id === cart.id && cartItem[i].user === currentUser) {
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
      localStorage.setItem(`cart_product_${currentUser}`, JSON.stringify(cartItem));
    }
  }
}

function getUserId() {
  // kiểm tra xem ID người dùng đã được lưu trữ trong bộ lưu trữ phiên chưa
  let userId = JSON.parse(localStorage.getItem("loginusers"));

  if (!userId) {
    // nếu ID người dùng không được lưu trữ, hãy chuyển hướng người dùng đến trang đăng nhập
    window.location.href = ""; // thay thế bằng URL trang đăng nhập của bạn
  }

  return userId.Name;
}
