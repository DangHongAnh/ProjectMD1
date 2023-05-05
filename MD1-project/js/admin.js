let listProduct = [];

// Lấy danh sách sản phẩm từ local storage
if (localStorage.getItem("listProduct")) {
  listProduct = JSON.parse(localStorage.getItem("listProduct"));
}

// --Render--
let tbody = document.querySelector(".tbody");
function renderlistProduct() {
  tbody.innerHTML = "";
  for (let i = 0; i < listProduct.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `
        <tr>
          <td>${listProduct[i].id}</td>
          <td>${listProduct[i].img}</td>
          <td>${listProduct[i].name}</td>
          <td>${listProduct[i].description}</td>
          <td>${listProduct[i].price}</td>
          <td>${listProduct[i].number}</td>
          <td>
            <button class="edit-btn" onclick="editProduct()" data-id="${listProduct[i].id}">Sửa</button>

            <button class="delete-btn" data-id="${listProduct[i].id}">Xóa</button>
            </td>
        </tr>
        `;
  }
}

renderlistProduct();

//hàm thêm sản phẩm vào admin
let form = document.querySelector(".form");
form.onsubmit = function (e) {
  e.preventDefault();

  if (
    form.name.value.trim() === "" ||
    form.description.value.trim() === "" ||
    form.price.value.trim() === "" ||
    isNaN(form.number.value)
  ) {
    alert("Bạn nhập thiếu thông tin hoặc thông tin không hợp lệ.");
  } else {
    let id = 0;
    if (listProduct.length == 0) {
      id = 1;
    } else {
      id = listProduct[listProduct.length - 1].id + 1;
    }
    let newProduct = {
      id: id,
      img: form.img.value,
      name: form.name.value,
      description: form.description.value,
      price: form.price.value,
      number: form.number.value,
    };
    listProduct.push(newProduct);
    localStorage.setItem("listProduct", JSON.stringify(listProduct)); // Lưu danh sách sản phẩm vào local storage
  }
  renderlistProduct();
  form.reset();
};

// Xóa sản phẩm
function deleteProduct(productId) {
  let index = listProduct.findIndex(function (product) {
    return product.id == productId;
  });
  if (index > -1) {
    listProduct.splice(index, 1);
    localStorage.setItem("listProduct", JSON.stringify(listProduct)); // Lưu danh sách sản phẩm vào local storage
  }
  renderlistProduct();
}

// Thêm sự kiện "click" cho bảng
let table = document.querySelector("table");
table.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    let productId = event.target.getAttribute("data-id");
    deleteProduct(productId);
  }
});

// HÀM SỬA



//Lấy ra giá trị "data-id" của sản phẩm được chọn
function editProduct() {
  let productId = event.target.getAttribute("data-id");
  //Tìm kiếm vị trí của sản phẩm trong mảng 
  let index = listProduct.findIndex(function (product) {
    return product.id == productId;
  });
  //Gán các giá trị thuộc tính
  if (index > -1) {
    let editProduct = listProduct[index];
    form.img.value = editProduct.img;
    form.name.value = editProduct.name;
    form.description.value = editProduct.description;
    form.price.value = editProduct.price;
    form.number.value = editProduct.number;
//Thiết lập sự kiện submit form để lưu các thay đổi vào danh sách sản phẩm.
    form.onsubmit = function (e) {
      e.preventDefault();

      if (
        form.name.value.trim() === "" ||
        form.description.value.trim() === "" ||
        form.price.value.trim() === "" ||
        isNaN(form.number.value)
      ) {
        alert("Bạn nhập thiếu thông tin hoặc thông tin không hợp lệ.");
      } else {
        editProduct.img = form.img.value;
        editProduct.name = form.name.value;
        editProduct.description = form.description.value;
        editProduct.price = form.price.value;
        editProduct.number = form.number.value;

        localStorage.setItem("listProduct", JSON.stringify(listProduct)); // Lưu danh sách sản phẩm vào local storage
      }
      renderlistProduct();
      form.reset();
    };
  }
}
