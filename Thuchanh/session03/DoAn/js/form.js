let nameInput = document.querySelector('input[name="name"]');
let usernameInput = document.querySelector('input[name="email"]');

let addressInput = document.querySelector('input[name="address"]');
let button = document.getElementById("btn-send");
button.onclick = function () {
  if (
    nameInput.value === "" ||
    usernameInput.value === "" ||
    addressInput.value === ""
  ) {
    alert("Thất bại,vui lòng nhập đầy đủ thông tin");
  } else {
    alert("Mua Thành Công");
  }
};
