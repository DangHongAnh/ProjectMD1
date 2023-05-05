let listBikeElectronic = [
    
];

// Lấy danh sách sản phẩm từ local storage
if (localStorage.getItem("listBikeElectronic")) {
  listBikeElectronic = JSON.parse(localStorage.getItem("listBikeElectronic"));
}

// --Render--
let tbody = document.querySelector(".tbody2");

function renderlistBikeElectronic() {
  tbody.innerHTML = "";
  for (let i = 0; i < listBikeElectronic.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `
        <tr>
          <td>${listBikeElectronic[i].id}</td>
          <td>${listBikeElectronic[i].img}</td>
          <td>${listBikeElectronic[i].name}</td>
          <td>${listBikeElectronic[i].description}</td>
          <td>${listBikeElectronic[i].price}</td>
          <td>${listBikeElectronic[i].number}</td>
          <td>
            <button class="edit-btn">Sửa</button>
            <button class="delete-btn" data-id="${listBikeElectronic[i].id}">Xóa</button>
            </td>
        </tr>
        `;
  }
}

renderlistBikeElectronic();


//hàm thêm sản phẩm vào admin
let form = document.querySelector('.form');
form.onsubmit = function(e) {
    e.preventDefault();
    
    if (form.name.value.trim() === "" || form.description.value.trim() === "" || form.price.value.trim() === "" || isNaN(form.number.value)) {
        alert("Bạn nhập thiếu thông tin hoặc thông tin không hợp lệ.");
    } else {
        let newBike = {
            id: listBikeElectronic.length + 1,
            img: form.img.value,
            name: form.name.value,
            description: form.description.value,
            price: form.price.value,
            number: form.number.value
        };
        listBikeElectronic.push(newBike);
        localStorage.setItem("listBikeElectronic", JSON.stringify(listBikeElectronic)); // Lưu danh sách sản phẩm vào local storage
    }
    renderlistBikeElectronic();
    form.reset();
};

// Xóa sản phẩm
function deleteProduct(productId) {
  let index = listBikeElectronic.findIndex(function(product) {
      return product.id == productId;
  });
  if (index > -1) {
      listBikeElectronic.splice(index, 1);
      localStorage.setItem("listBikeElectronic", JSON.stringify(listBikeElectronic)); // Lưu danh sách sản phẩm vào local storage
  }
  renderlistBikeElectronic();
}


// Thêm sự kiện "click" cho bảng
let table = document.querySelector("table");
table.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btn")) {
    let productId = event.target.getAttribute("data-id");
    deleteProduct(productId);
  }
});
