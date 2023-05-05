let userLogin = JSON.parse(localStorage.getItem("loginusers"));
let cartProductt =
  JSON.parse(localStorage.getItem(`cart_product_${userLogin.Name}`)) || [];
let tbody = document.querySelector(".tbody");
function cartItemm() {
  tbody.innerHTML = "";
  for (let i = 0; i < cartProductt.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `
        <tr>
                <td>${i + 1}</td>
                <td>${cartProductt[i].name}</td>
                <td>${cartProductt[i].price}</td>
                <td><input type="number" value="1" min="1"></td>
               <td><button>Xóa</button></td>
    
            </tr>
        `;
  }
}
cartItemm();
function sumMoney() {
  let total = 0;
  for (let i = 0; i < cartProductt.length; i++) {
    total +=
      cartProductt[i].price *
      parseInt(document.querySelectorAll('input[type="number"]')[i].value);
  }
  return total;
}
let tfoot = document.querySelector(".money");
function moneyItem() {
  tfoot.innerHTML = "";

  tfoot.innerHTML =
    tfoot.innerHTML +
    `
        
                <td colspan="4" style="text-align: right">Tổng tiền:</td>
                <td>${sumMoney()} </td>
          
        `;
}
moneyItem();

// Lấy danh sách sản phẩm giỏ hàng từ local storage
// let cartProductt = JSON.parse(localStorage.getItem("cart_product"));

// Lấy các nút xóa khỏi DOM
let deleteButtons = document.querySelectorAll(".tbody button");
let userId = JSON.parse(localStorage.getItem("loginusers"));

// Thêm sự kiện "click" cho các nút xóa
deleteButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Xóa sản phẩm khỏi mảng giỏ hàng
    cartProductt.splice(index, 1);

    // Lưu lại mảng giỏ hàng vào local storage
    localStorage.setItem(
      "cart_product_" + userId.Name,
      JSON.stringify(cartProductt)
    );

    // Cập nhật lại bảng giỏ hàng và tổng tiền
    cartItemm();
    moneyItem();
    location.reload()
  });
});

// tính tổng một sản phẩm

let quantityInputs = document.querySelectorAll('input[type="number"]');

quantityInputs.forEach(function (input) {
  input.addEventListener("change", function () {
    moneyItem(); // tính lại tổng tiền sau khi số lượng sản phẩm thay đổi
  });
});

// lưu thông tin thanh toán lên local

let payProduct = JSON.parse(localStorage.getItem("payProduct"));
function savePayment() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let money = document.getElementById("money").value;
  let card = document.getElementById("card").value;
  let expmonth = document.getElementById("expmonth").value;
  let expyear = document.getElementById("expyear").value;
  let cvv = document.getElementById("cvv").value;
  let newPayProduct = {
    name: name,
    email: email,
    address: address,
    card: card,
    money: money,
    expmonth: expmonth,
    expyear: expyear,
    cvv: cvv,
  };
  // let payProduct = { name: name, email: email, address: address, card: card, expmonth: expmonth, expyear: expyear, cvv: cvv};
  payProduct.push(newPayProduct);
  localStorage.setItem("payProduct", JSON.stringify(payProduct));
  alert("Thông tin thanh toán đã được xác nhận!");
}
