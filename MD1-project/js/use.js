// let listUserlogin = JSON.parse(localStorage.getItem("listUser"));
// console.log(listUserlogin);
// let profileee = document.getElementById("userBody")
// console.log(profileee);
// let loginUserlogin = JSON.parse(localStorage.getItem("loginusers"));
// console.log(listUserlogin.Name );
// let currentUser = null;

// function renderProfile() {
//     for (let i = 0; i < listUserlogin.length; i++) {
//       if (loginUserlogin.Name == listUserlogin[i].Name) {
//         profileee.innerHTML += `
//           <tr>
//             <td>${listUserlogin[i].Name}</td>
//             <td>${listUserlogin[i].Email}</td>
//             <td>${listUserlogin[i].address}</td>
//             <td>${listUserlogin[i].password}</td>
//             <td>
//               <button class="edit-btn" onclick="rendernewProfile(${i})" data-id="${listUserlogin[i].id}">Sửa</button>
//             </td>
//           </tr>
//         `;
//       }
//     }
//   }
  
// renderProfile ();

// function rendernewProfile() {
//     for (let i = 0; i < listUserlogin.length; i++) {
//       if (loginUserlogin.Name == listUserlogin[i].Name) {
//         profileee.innerHTML += `
//           <tr>
//             <td><input id = namNew type="text"></td>
//             <td><input id = emailNew  type="text"></td>
//             <td><input id = addressNew  type="text"></td>
//             <td><input id = passwordNew type="text"></td>
//             <td>
//               <button class="edit-btn" data-id="${listUserlogin[i].id}">Cập Nhật</button>
//             </td>
//           </tr>
//         `;
//       }
//       let newUse = namNew.document.getElementById("namNew")
//       let emailNew = namNew.document.getElementById("emailNew")
//       let addressNew = namNew.document.getElementById("addressNew")
//       let passwordNew = namNew.document.getElementById("passwordNew")
//       loginUserlogin[i] = {Name : nameNew , Email : emailNew , address : addressNew , password : passwordNew}
//     }
//     renderProfile()
//   }

  


let listUserlogin = JSON.parse(localStorage.getItem("listUser"));
let profileee = document.getElementById("userBody");
let loginUserlogin = JSON.parse(localStorage.getItem("loginusers"));
let currentUser = null;

function renderProfile() {
  for (let i = 0; i < listUserlogin.length; i++) {
    if (loginUserlogin.Name == listUserlogin[i].Name) {
        const password = "********";
      profileee.innerHTML += `
        <tr>
          <td>${listUserlogin[i].Name}</td>
          <td>${listUserlogin[i].Email}</td>
          <td>${listUserlogin[i].address}</td>
          <td>${password}</td>
         
         
        </tr>
        <tr>
        <button class="edit-btn" onclick="rendernewProfile(${i})" data-id="${listUserlogin[i].id}">Sửa</button>
      </tr>
      `;
    }
  }
}

renderProfile();

function rendernewProfile(index) {
  currentUser = listUserlogin[index];
  profileee.innerHTML = `
    <tr>
      <td><input id="edit-form-name" type="text" value="${currentUser.Name}"></td>
      <td><input id="edit-form-email" type="text" value="${currentUser.Email}"></td>
      <td><input id="edit-form-address" type="text" value="${currentUser.address}"></td>
      <td><input id="edit-form-password" type="text" value="${currentUser.password}"></td>
    
    </tr>
    <tr>
    <button class="edit-btn"  onclick="updateUser(${index})" data-id="${currentUser.id}">Cập Nhật</button>
  </tr>
  `;
}

function updateUser(index) {
  let newName = document.getElementById("edit-form-name").value;
  let newEmail = document.getElementById("edit-form-email").value;
  let newAddress = document.getElementById("edit-form-address").value;
  let newPassword = document.getElementById("edit-form-password").value;

  listUserlogin[index] = {
    ...listUserlogin[index],
    Name: newName,
    Email: newEmail,
    address: newAddress,
    password: newPassword,
  };

  localStorage.setItem("listUser", JSON.stringify(listUserlogin));
  profileee.innerHTML = "";
  renderProfile();
}
